import { BadRequestException, Injectable, NotFoundException } from "@nestjs/common";
import { UserService } from "../users/user.service";
import { SignUpDto } from "./dtos/signup.dto";
import { randomBytes, scrypt as _scrypt } from "crypto";
import { promisify } from "util";
import { SigninDto } from "./dtos/signin.dto";
import { JwtService } from "@nestjs/jwt";


const scrypt = promisify(_scrypt);

@Injectable()
export class AuthService{
    
    constructor(
        private _userService: UserService,
        private _jwtService: JwtService
    ){}


    async createUser(userData: SignUpDto){
        const {username, password} = userData

        const users = await this._userService.findUser(username)

        if(users) throw new BadRequestException('Username already in use');

        const salt = randomBytes(8).toString('hex');

        const hash = (await scrypt(password, salt, 32)) as Buffer;

        const result = salt + '.' + hash.toString('hex');

        const newUser = {username:username, password: result}

        const user = await this._userService.createUser(newUser)

        return user
    }

    async signin(userData: SigninDto){

        const {username, password} = userData

        const user = await this._userService.findUser(username)

        if(!user) throw new NotFoundException('User not found');

        const [salt, storedHash] = user.password.split('.')
        
        const hash = (await scrypt(password, salt, 32)) as Buffer;

        if (storedHash !== hash.toString('hex')) throw new BadRequestException('Invalid Credential');

        const payload = {sub: user.id, username: user.username}

        return {
            access_token: await this._jwtService.signAsync(payload)
        }
    }
}