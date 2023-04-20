import { Injectable } from '@nestjs/common';
import { CreateTodoDto } from './dto/create-todo.dto';
import { UpdateTodoDto } from './dto/update-todo.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Todo } from './entities/todo.entity';

@Injectable()
export class TodosService {
  constructor(@InjectModel('Todo') private readonly todoModel: Model<Todo>) {}

  async uusge(createTodoDto: CreateTodoDto): Promise<Todo> {
    const result = await this.todoModel.create(createTodoDto);
    // const newTodo = new this.todoModel(createTodoDto);
    // const result=await newTodo.save()  ingej bichij bas bolno
    return result;
  }

  findAll() {
    return `This action returns all todos`;
  }

  findOne(id: number) {
    return `This action returns a #${id} todo`;
  }

  async update(id: string, updateTodoDto: UpdateTodoDto) {
    const result = await this.todoModel.findByIdAndUpdate(id, updateTodoDto, {
      new: true,
    });
    return result;
  }

  remove(id: number) {
    return `This action removes a #${id} todo`;
  }
}
