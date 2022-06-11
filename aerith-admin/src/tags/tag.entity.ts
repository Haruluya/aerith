import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Tag {
  @PrimaryGeneratedColumn()
  id?: Number;

  @Column()
  name: Number;

  @Column()
  description:String;

}
