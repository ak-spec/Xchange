import { Schema, model, models, Model } from 'mongoose';
import {hash} from 'bcrypt-ts';
import jwt from "jsonwebtoken";

// 1. Create an interface representing a document in MongoDB.
export interface IUser {
  username: string;
  email: string;
  password: string;
  avatar?: string;
  createJwtToken(): Promise<string>;
}

const userSchema = new Schema<IUser>({
  username: {type: String, required: true},
  email: { type: String, required: true, unique: true},
  password: { type: String, required: true },
  avatar: String
});

userSchema.methods.createJwtToken = async function(): Promise<string> {
  const payload = {userEmail: this.email, id: this._id, username: this.username};
  if(!process.env.JWT_SECRET) throw new Error("Missing JWT secret");
  const token = jwt.sign(payload, process.env.JWT_SECRET,  { expiresIn: "10h" });
  return token;
}


userSchema.pre("save", async function(){
  console.log(this.email, this.password);
  const hashed_password = await hash(this.password, 10);
  this.password = hashed_password
})

const UserModel: Model<IUser> = models.User || model<IUser>('User', userSchema);

export default UserModel;




