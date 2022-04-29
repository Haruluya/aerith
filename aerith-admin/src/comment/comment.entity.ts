import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Comment {
  @PrimaryGeneratedColumn()
  id?: Number;

  @Column()
  uid: Number;

  @Column()
  aid: Number;

  @Column()
  description: String;

  @Column()
  create_time: Number;

  @Column()
  content: String;

  @Column()
  status:Number;

  @Column()
  parent:Number;

}
