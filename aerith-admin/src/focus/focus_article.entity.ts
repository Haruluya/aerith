import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export default class FocusArticle {
  @PrimaryGeneratedColumn()
  @ApiProperty()
  id?: Number;
  
  @ApiProperty()
  @Column()
  uid: Number;

  @ApiProperty()
  @Column()
  aid: Number;

  @ApiProperty()
  @Column()
  focus_time: Number;

}
