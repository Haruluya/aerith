import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity()
export default class Article {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id?: number;
  @ApiProperty()
  @Column()
  uid: number;
  @ApiProperty()
  @Column()
  tid: number;
  @ApiProperty()
  @Column()
  title: string;
  @ApiProperty()
  @Column()
  description: string;
  @ApiProperty()
  @Column()
  create_time: number;
  @ApiProperty()
  @Column()
  update_time?: number;
  @ApiProperty()
  @Column()
  content: string;
  @ApiProperty()
  @Column()
  view_count:number;
  @ApiProperty()
  @Column()
  like_count:number;
  @ApiProperty()
  @Column()
  status:number;
  @ApiProperty()
  @Column()
  cover:String;
}
