import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity()
export default class Comment {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id?: number;

  @ApiProperty()
  @Column()
  uid: number;

  @ApiProperty()
  @Column()
  aid: number;


  @ApiProperty()
  @Column()
  create_time: number;

  @ApiProperty()
  @Column()
  content: String;

  @ApiProperty()
  @Column()
  status:number;

  @ApiProperty()
  @Column()
  parent:number;

}
