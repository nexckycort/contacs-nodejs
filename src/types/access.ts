import { Document } from 'mongoose';

export interface IUser extends Document {
  name: string,
  email: string,
  password: string
}

export interface IContact extends Document {
  name: string,
  email: string,
  cellphone: string
}
