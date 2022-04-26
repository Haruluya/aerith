
import { Injectable } from '@nestjs/common';


import  User  from './user.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, Repository } from 'typeorm';

// jwt验证。
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class UserService {
  constructor(

    @InjectRepository(User)
    private userRepository: Repository<User>,
    private readonly jwtService:JwtService,

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
   findUserByPhone(phone:string): Promise<User[]>{
    return this.userRepository.find({
      where:{
        phone,
      }
    })
  }

  // 通过name寻找用户。
  async findUserByName(name:string): Promise<User[]>{
    return await this.userRepository.find({
      where:{
        name,
      }
    })
  }

  // 新增用户。
  async addUser(user:any):Promise<InsertResult>{
    return await this.userRepository.insert(user);
  }


  async remove(id: string): Promise<void> {
    await this.userRepository.delete(id);
  }


  //基于nest-jwt，通过name,phone创建token。 
  async getToken(user:{name:string,phone:string}){
    return {
      access_token: this.jwtService.sign(user),
    };
  }
}
