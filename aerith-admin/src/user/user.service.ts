import { Model } from 'mongoose';
import { Injectable, Inject } from '@nestjs/common';

import { CreateUserDto } from './dto/create-user.dto';

import  User  from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    // @Inject('USER_MODEL')
    // private userModel: Model<User>,

    @InjectRepository(User)
    private usersRepository: Repository<User>

  ) {}

  // async create(createCatDto: CreateUserDto): Promise<User> {
  //   const createdCat = new this.userModel(createCatDto);
  //   return createdCat.save();
  // }

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.usersRepository.findOne(id);
  }

  async remove(id: string): Promise<void> {
    await this.usersRepository.delete(id);
  }
}
