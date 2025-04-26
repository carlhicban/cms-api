import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";
import { Contact } from "./schemas/Contact.schema";
import { Model } from "mongoose";
import { CreateContactDto } from "./dtos/create-contact.dto";

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
}