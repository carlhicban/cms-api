import { BadRequestException, Injectable } from "@nestjs/common";
import { CreateUserDto } from "./dtos/create-user.dto";
import { InjectModel } from "@nestjs/mongoose";
import { User, UserSchema } from "./schemas/User.schema";
import { Model } from "mongoose";


@Injectable()
export class UserService{
    constructor(
        @InjectModel(User.name) private userModel: Model<User>
    ){}


    async createUser(user: CreateUserDto){
        const newUser = await new this.userModel(user)
        return newUser.save()
    }

    async findUser(username: string){
        const users = await this.userModel.findOne({username})
        return users
    }
}