import { Module } from "@nestjs/common";
import { MongooseModule, Schema } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/User.schema";

@Module({
    imports: [MongooseModule.forFeature([{
        name: User.name,
        schema: UserSchema
    }])]
})

export class UserModule{}
