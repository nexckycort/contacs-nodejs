import mongoose, { Schema } from 'mongoose';
import { IContactModel } from '../types/access';

const ContactsSchema = new Schema({
  email: String,
  name: String,
  cellphone: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  }
});

export default mongoose.model<IContactModel>('contacts', ContactsSchema);
