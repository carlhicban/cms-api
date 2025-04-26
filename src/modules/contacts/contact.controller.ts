import { Body, Controller, Post, Get, Delete, Param, HttpException, Put } from "@nestjs/common";
import { CreateContactDto } from "./dtos/create-contact.dto";
import { ContactService } from "./contact.service";
import mongoose from "mongoose";
import { UpdateContactDto } from "./dtos/update-contact.dto";
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
    async deleteContact(@Param('id') id:string){
        const isValid = mongoose.Types.ObjectId.isValid(id)

        if(!isValid) throw new HttpException('Invalid ID', 400);

        const deleteContact = await this._contactService.deleteContact(id)

        if(!deleteContact) throw new HttpException('Contact not found', 404);

        return
    }

    @Put(":id")
    async updateContact(@Param('id') id:string, @Body() body:UpdateContactDto){
        return this._contactService.updateContact(id, body)
    }
}