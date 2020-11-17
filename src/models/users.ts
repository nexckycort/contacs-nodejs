import mongoose, { Schema } from 'mongoose';
import { IUser } from '../types/access';

const UsersSchema = new Schema({
  email: String,
  name: String,
  password: String
});

export default mongoose.model<IUser>('users', UsersSchema);
