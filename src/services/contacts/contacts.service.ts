import Contacts from '../.././models/contacts';
import { IContact, ICreateContact } from '../../interfaces/access';
import { handleError } from '../../helpers/api.error';

export class ContactsService {
  static async create(createContact: ICreateContact): Promise<IContact> {
    const { name, email, cellphone, session: { id } } = createContact;

    const contact: IContact = {
      name,
      email,
      cellphone,
      user: id
    };

    return Contacts.create(contact)
      .then((data: IContact) => {
        return data;
      })
      .catch((e: Error) => {
        throw e;
      });
  }

  static async findByCellPhone(user: string, cellphone: string): Promise<IContact | null> {
    try {
      const data = await Contacts.findOne({ user, cellphone });
      return data;
    } catch (e) {
      handleError(e);
      throw e;
    }
  }

  static async find(id: string): Promise<IContact[]> {
    try {
      const data = await Contacts.find({ user: id });
      return data;
    } catch (e) {
      handleError(e);
      throw e;
    }
  }

  static async findByPk(user: string, id: string): Promise<IContact | null> {
    try {
      const data = await Contacts.findOne({ user, _id: id });
      return data;
    } catch (e) {
      handleError(e);
      throw e;
    }
  }

  static async update(contactId: string, createContact: ICreateContact): Promise<IContact | null> {
    try {
      const { name, email, cellphone, session: { id } } = createContact;

      const contact = {
        name,
        email,
        cellphone
      };

      const data = await Contacts.findByIdAndUpdate({ _id: contactId, user: id }, contact);
      return data;
    } catch (e) {
      handleError(e);
      throw e;
    }
  }

  static async delete(user: string, contactId: string): Promise<IContact | null> {
    try {
      const data = await Contacts.findOneAndDelete({ _id: contactId, user });
      return data;
    } catch (e) {
      handleError(e);
      throw e;
    }
  }
}
