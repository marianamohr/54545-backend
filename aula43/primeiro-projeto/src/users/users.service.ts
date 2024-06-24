import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
// import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<User>) {}

  async create(createUserDto: CreateUserDto) {
    const user = await this.userModel.create(createUserDto);

    console.log(user);
    return user;
  }

  async findAll() {
    const allUsers = await this.userModel.find();
    // console.log(allUsers);
    return allUsers;
  }

  async findOne(id: string) {
    const user = await this.userModel.findOne({ _id: id });

    return user;
  }
  /*
  update(id: number, updateUserDto: UpdateUserDto) {
    const index = this.users.findIndex((u) => u.id === id);
    const user = {
      id: id,
      ...updateUserDto,
    } as User;
    this.users[index] = user;
    return user;
  }

  remove(id: number) {
    const users = this.users.filter((u) => u.id !== id);
    this.users = users;
    return `This action removes a #${id} user`;
  }*/
}
