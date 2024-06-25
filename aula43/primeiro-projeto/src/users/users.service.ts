import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';

import { User } from './entities/user.entity';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class UsersService {
  constructor(
    @InjectModel(User.name) private userModel: Model<User>,
    private config: ConfigService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    const xablau = this.config.get<string>('XABLAU');
    console.log(xablau);
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

  async update(id: string, updateUserDto: UpdateUserDto) {
    const user = await this.userModel.updateOne({ _id: id }, updateUserDto);
    return user;
  }

  async remove(id: string) {
    const users = await this.userModel.deleteOne({ _id: id });
    return users;
  }
}
