import { Document } from 'mongoose';
import { ApiProperty } from '@nestjs/swagger';

export class ArticleRequest{
    @ApiProperty()
    articleNum?:number
    @ApiProperty()
    uid?:number
    @ApiProperty()
    tid?:number 
  }