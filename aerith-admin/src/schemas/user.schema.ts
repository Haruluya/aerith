import * as mongoose from 'mongoose';

export const UserSchema = new mongoose.Schema({
    id:Number,
    nickName: String,
    // age: Number,
    // password: String,
    // signature: String,
    // email: String,
    // phone: String
});
