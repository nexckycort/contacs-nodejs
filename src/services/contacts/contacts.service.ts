import Contacts from '../.././models/contacts';
import { IContact } from '../../types/access';
import { handleError } from '../../helpers/api.error';
import { Types } from 'mongoose';

export class ContactsService {
  static async create(contact: IContact): Promise<IContact> {
    return Contacts.create(contact)
      .then((data: IContact) => {
        return data;
      })
      .catch((e: Error) => {
        throw e;
      });
  }

  static async findByCellPhone(cellphone: string): Promise<IContact | null> {
    try {
      const data = await Contacts.findOne({ cellphone });
      return data;
    } catch (e) {
      handleError(e);
      throw e;
    }
  }

  static async find(): Promise<IContact[]> {
    try {
      const data = await Contacts.find();
      return data;
    } catch (e) {
      handleError(e);
      throw e;
    }
  }

  static async findByPk(id: string): Promise<IContact | null> {
    try {
      const data = await Contacts.findById(id);
      return data;
    } catch (e) {
      handleError(e);
      throw e;
    }
  }

  static async update(id: string, contact: IContact): Promise<IContact | null> {
    try {
      const data = await Contacts.findByIdAndUpdate({ _id: id }, contact);
      return data;
    } catch (e) {
      handleError(e);
      throw e;
    }
  }
}
