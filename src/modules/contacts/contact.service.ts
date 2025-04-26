import { HttpException, Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Contact } from "./schemas/Contact.schema";
import { Model } from "mongoose";
import { CreateContactDto } from "./dtos/create-contact.dto";
import { UpdateContactDto } from "./dtos/update-contact.dto";

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
}