import { Schema,model } from "mongoose";
interface User{
    name:String,
    dept:String
}
const UserSchema=new Schema<User>({
    name:{type:"String",required:true},
    dept:{type:"String",required:true}
})
const UserModel=model<User>("User",UserSchema)
export default UserModel;