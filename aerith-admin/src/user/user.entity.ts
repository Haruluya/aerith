import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id?: Number;

  @Column()
  username: String;

  @Column()
  mobile: string;

  @Column()
  salt: string;

  @Column()
  password: String;

  @Column({nullable: true})
  nickname?: String;

  @Column({nullable: true})
  avatar?:String;

  @Column({nullable: true})
  background_img?:String;

  @Column({nullable: true})
  email?:String;

  @Column({nullable: true})
  tags?:String;

  @Column({nullable: true})
  level?:String;

  @Column({nullable: true})
  score?:Number;

  @Column({nullable: true})
  role?: String;
}
