import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { ContactSchema, Contact } from "./schemas/Contact.schema";
import { ContactController } from "./contact.controller";
import { ContactService } from "./contact.service";


@Module({
    imports: [
        MongooseModule.forFeature([{
            name: Contact.name,
            schema: ContactSchema
        }])
    ],
    providers: [
        ContactService
    ],
    controllers: [
        ContactController
    ]
})

export class ContactModule{}