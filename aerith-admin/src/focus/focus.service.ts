import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InsertResult, QueryBuilder, Repository, UpdateResult } from 'typeorm';
import FocusArticle from './focus_article.entity';
import FocusUser

from './focus_user.entity';
@Injectable()
export class FocusService {
    constructor(

        @InjectRepository(FocusUser)
        private focusUserRepository: Repository<FocusUser>,

        @InjectRepository(FocusArticle)
        private focusArticleRepository: Repository<FocusArticle>,
    ) {}


    addUserFocus(data:FocusUser){
        return this.focusUserRepository
        .createQueryBuilder()
        .insert()
        .into(FocusUser)
        .values(data)
        .execute()
    }

    getUserFocusById(uid:number){
        return this.focusUserRepository
            .createQueryBuilder("focus_user")
            .where("focus_user.uid = :uid",{uid})
            .getMany()
    }

    getUserFanById(uid:number){
        return this.focusUserRepository
            .createQueryBuilder("focus_user")
            .where("focus_user.fuid = :uid",{uid})
            .getMany()
    }

    deleteUserFocus(data:any){
        return this.focusUserRepository
            .createQueryBuilder()
            .delete()
            .from(FocusUser)
            .where("focus_user.uid = :uid and focus_user.fuid = :fuid", {uid:data.uid,fuid:data.fuid})
            .execute();
    }

}
