import { Body, Controller, Post } from "@nestjs/common";
import { SigninDto } from "./dtos/signin.dto";
import { SignUpDto } from "./dtos/signup.dto";
import { AuthService } from "./auth.service";


@Controller('auth')
export class AuthController{
    constructor(
        private _authService: AuthService
    ){}

    @Post('signin')
    login(@Body() body: SigninDto){
        return this._authService.signin(body)
    }

    @Post('signup')
    signup(@Body() body: SignUpDto){
       return this._authService.createUser(body)
    }
}