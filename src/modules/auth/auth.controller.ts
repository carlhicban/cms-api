import { Body, Controller, Post } from "@nestjs/common";
import { LoginDto } from "./dtos/login.dto";


@Controller('auth')
export class Auth{


    @Post()
    login(@Body() body: LoginDto){
        
    }
}