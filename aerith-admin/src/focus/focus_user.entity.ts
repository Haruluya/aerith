import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
@Entity()
export default class FocusUser {
  @ApiProperty()
  @PrimaryGeneratedColumn()
  id?: number;

  @ApiProperty()
  @Column()
  uid: number;

  @ApiProperty()
  @Column()
  fuid: number;

  @ApiProperty()
  @Column()
  focus_time: number;

}
