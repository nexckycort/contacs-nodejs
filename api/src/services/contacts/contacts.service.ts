import { CreateQuery, Types } from 'mongoose';

import Contacts from '../../models/contacts';
import { IContact } from '../../interfaces/access';

export class ContactsService {
  static async create(contact: CreateQuery<IContact>): Promise<IContact> {
    return Contacts.create(contact)
      .then((data: IContact) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }

  static async find(): Promise<IContact[]> {
    try {
      const data = await Contacts.find();
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async findByPk(id: string): Promise<IContact> {
    try {
      const data = await Contacts.findById(id);
      return data;
    } catch (error) {
      throw error;
    }
  }

  static async update(contact: CreateQuery<IContact>): Promise<IContact> {
    return Contacts.findByIdAndUpdate({ _id: contact._id }, contact)
      .then((data: IContact) => {
        return data;
      })
      .catch((error: Error) => {
        throw error;
      });
  }
}
