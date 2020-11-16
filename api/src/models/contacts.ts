import mongoose, { Schema } from 'mongoose';
import { IContact } from '../interfaces/access';

const ContactsSchema = new Schema({
  email: String,
  name: String,
  cellphone: String
});

export default mongoose.model<IContact>('contacts', ContactsSchema);
