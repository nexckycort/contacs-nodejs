import mongoose, { Schema } from 'mongoose';
import { IUser } from '../interfaces/access';

const UsersSchema = new Schema({
  email: String,
  name: String,
  password: String
});

export default mongoose.model<IUser>('users', UsersSchema);
