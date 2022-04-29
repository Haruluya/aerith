import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class FocusArticle {
  @PrimaryGeneratedColumn()
  id?: Number;

  @Column()
  uid: Number;

  @Column()
  aid: Number;

  @Column()
  focus_time: Number;

}
