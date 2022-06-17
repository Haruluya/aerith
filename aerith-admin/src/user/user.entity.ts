import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity()
export default class User {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id?: Number;
  @ApiProperty()
  @Column()
  username: String;
  @ApiProperty()
  @Column()
  mobile: string;
  @ApiProperty()
  @Column()
  salt: string;
  @ApiProperty()
  @Column()
  password: String;
  @ApiProperty()
  @Column({nullable: true})
  nickname?: String
  @ApiProperty()
  @Column({nullable: true})
  avatar?:String;
  @ApiProperty()
  @Column({nullable: true})
  background_img?:String;
  @ApiProperty()
  @Column({nullable: true})
  email?:String;
  @ApiProperty()
  @Column({nullable: true})
  tags?:String;
  @ApiProperty()
  @Column({nullable: true})
  level?:Number = 0;
  @ApiProperty()
  @Column({nullable: true})
  score?:Number;
  @ApiProperty()
  @Column({nullable: true})
  role?: String;
  @ApiProperty()
  @Column({nullable: true,default: '这个人还没有个性签名嗷...'})
  signature?: String;
}
