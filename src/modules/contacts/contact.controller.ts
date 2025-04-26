import { Body, Controller, Post } from "@nestjs/common";
import { CreateContactDto } from "./dtos/create-contact.dto";

@Controller('contacts')
export class ContactController{

    @Post()
    createContact(@Body() body:CreateContactDto){
        console.log(body)
    }
}