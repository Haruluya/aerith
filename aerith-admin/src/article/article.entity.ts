import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class Article {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column()
  uid: Number;

  @Column()
  tid: Number;

  @Column()
  title: string;

  @Column()
  description: string;

  @Column()
  create_time: Number;

  @Column()
  update_time?: Number;

  @Column()
  content: string;

  @Column()
  view_count:Number;

  @Column()
  like_count:Number;

  @Column()
  status:Number;
}
