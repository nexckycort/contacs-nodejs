import { Document, Schema } from 'mongoose';

export interface IUser extends Document {
  name: string,
  email: string,
  password: string
}

export interface IContact {
  name: string,
  email: string,
  cellphone: string,
  user: string
}

export interface IContactModel extends IContact, Document { }

export interface ISession {
  email: string,
  nombre: string,
  id: string,
  iat: number,
  exp: number
}

export interface ICreateContact {
  name: string,
  email: string,
  cellphone: string,
  session: ISession
}
