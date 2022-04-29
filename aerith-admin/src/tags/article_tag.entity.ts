import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class ArticleTag {
  @PrimaryGeneratedColumn()
  id?: Number;

  @Column()
  aid: Number;

  @Column()
  tagid: Number;

}
