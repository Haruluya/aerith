import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class FocusArticle {
  @PrimaryGeneratedColumn()
  id?: Number;

  @Column()
  name: Number;

  @Column()
  description:String;

}
