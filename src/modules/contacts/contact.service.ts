import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Contact } from "./schemas/Contact.schema";
import { Model } from "mongoose";
import { CreateContactDto } from "./dtos/create-contact.dto";
import { UpdateContactDto } from "./dtos/update-contact.dto";
import { SearchContactsDto } from "./dtos/search-contact.dto";

@Injectable()
export class ContactService{

    constructor(
        @InjectModel(Contact.name) private contactModel: Model<Contact>
    ){}

    createContact(contact: CreateContactDto){
        const newContact = new this.contactModel(contact)
        return newContact.save()
    }

    getContacts(){
        const contacts = this.contactModel.find();
        return contacts
    }

    deleteContact(id: string){
        return this.contactModel.findByIdAndDelete(id);
    }

    updateContact(id: string, contact: UpdateContactDto){
        const updateContact = this.contactModel.findByIdAndUpdate(id, contact, {new: true})

        if(!updateContact) throw new HttpException(`User with ID ${id} not found`, 404);

        return updateContact;
    }

    async searchContacts(query: SearchContactsDto) {
      const { name, city, email, sortBy, sortOrder, page, limit, createdAfter } = query;
    
      const filter: any = {};
    
      if (name || email || city) {
        filter.$or = [];
    
        if (name) {
          filter.$or.push({ name: { $regex: name, $options: 'i' } });
        }
    
        if (email) {
          filter.$or.push({ email: { $regex: email, $options: 'i' } });
        }
    
        if (city) {
          filter.$or.push({ city: { $regex: `^${city}$`, $options: 'i' } });
        }
      }
      if (createdAfter) {
        const startOfDay = new Date(createdAfter);
        startOfDay.setHours(0, 0, 0, 0); 
      
        const endOfDay = new Date(createdAfter);
        endOfDay.setHours(23, 59, 59, 999); 
      
        filter.createdAt = { $gte: startOfDay, $lte: endOfDay };
      }
      
      const sortOption: any = {};
      if (sortBy) {
        sortOption[sortBy] = sortOrder === 'asc' ? 1 : -1;
      }
    
      const skip = (page - 1) * limit;
    
      const contacts = await this.contactModel
        .find(filter)
        .sort(sortOption)
        .skip(skip)
        .limit(limit)
        .exec();
    
      
      const total = await this.contactModel.countDocuments(filter);
    
      return {
        data: contacts,
        pagination: {
          total,
          page,
          limit,
          totalPages: Math.ceil(total / limit),
        },
      };
    }
    
}