import { IsString } from "class-validator";

export class CreateContactDto{

    @IsString()
    name: string;

    @IsString()
    title: string;

    @IsString()
    email: string;

    @IsString()
    phone: string;

    @IsString()
    address: string;

    @IsString()
    city: string;
}