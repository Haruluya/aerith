import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class FocusUser {
  @PrimaryGeneratedColumn()
  id?: Number;

  @Column()
  uid: Number;

  @Column()
  fuid: Number;

  @Column()
  focus_time: Number;

}
