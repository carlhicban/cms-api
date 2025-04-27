import { Module } from "@nestjs/common";
import { MongooseModule, Schema } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/User.schema";
import { UserService } from "./user.service";
import { UserController } from "./user.controller";

@Module({
    imports: [MongooseModule.forFeature([{
        name: User.name,
        schema: UserSchema
    }])],
    providers:[UserService],
    controllers: [UserController],
    exports:[
        UserService
    ]
})

export class UserModule{}
