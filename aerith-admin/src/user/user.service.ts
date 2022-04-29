
import { Injectable } from '@nestjs/common';


import  User  from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(

    @InjectRepository(User)
    private userRepository: Repository<User>,


  ) {}

  // async create(createCatDto: CreateUserDto): Promise<User> {
  //   const createdCat = new this.userModel(createCatDto);
  //   return createdCat.save();
  // }

  findAll(): Promise<User[]> {
    return this.userRepository.find();
  }

  findOne(id: string): Promise<User> {
    return this.userRepository.findOne(id);
  }



  // 通过电话号寻找用户。
  findUserByPhone(mobile:string): Promise<User[]>{
    return this.userRepository.find({
      where:{
        mobile,
      }
    })
  }

  // 通过name寻找用户。
  findUserByName(username:string): Promise<User[]>{
    return this.userRepository.find({
      where:{
        username,
      }
    })
  }

    // 通过ID寻找用户。
    findUserById(id:number): Promise<User[]>{
      return this.userRepository.find({
        where:{
          id,
        }
      })
    }

  // 新增用户。
  addUser(user:User):Promise<InsertResult>{
    return  this.userRepository.insert(user);
  }


 async remove(id: string): Promise<void> {
    this.userRepository.delete(id);
  }


}
