import { Body, Controller, Post, Get, Delete } from "@nestjs/common";
import { CreateContactDto } from "./dtos/create-contact.dto";
import { ContactService } from "./contact.service";
@Controller('contacts')
export class ContactController{

    constructor(
        private _contactService: ContactService
    ){}

    @Post()
    createContact(@Body() body:CreateContactDto){
       return this._contactService.createContact(body)
    }

    @Get()
    getContacts(){
        return this._contactService.getContacts()
    }

    @Delete(":id")
    deleteContact(){
        
    }
}