import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { UserModule } from "../users/user.module";
import { JwtModule } from "@nestjs/jwt";

@Module({
    imports:[
        UserModule,
        JwtModule.register({
            global: true,
            secret: 'secret',
            signOptions: {expiresIn: '12h'}
        })
    ],
    providers: [
        AuthService
    ],
    controllers:[
        AuthController
    ]
})

export class AuthModule{}