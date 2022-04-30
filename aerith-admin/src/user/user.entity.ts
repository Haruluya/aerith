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
  nickname?: String

  @Column({nullable: true})
  avatar?:String;

  @Column({nullable: true})
  background_img?:String;

  @Column({nullable: true})
  email?:String;

  @Column({nullable: true})
  tags?:String;

  @Column({nullable: true})
  level?:Number = 0;

  @Column({nullable: true})
  score?:Number;

  @Column({nullable: true})
  role?: String;

  @Column({nullable: true,default: '这个人还没有个性签名嗷...'})
  signature?: String;
}
