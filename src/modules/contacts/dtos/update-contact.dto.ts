import { IsOptional, IsString } from "class-validator";

export class UpdateContactDto{

    @IsString()
    @IsOptional()
    name?: string;

    @IsString()
    @IsOptional()
    title?: string;

    @IsString()
    @IsOptional()
    email?: string;

    @IsString()
    @IsOptional()
    phone?: string;

    @IsString()
    @IsOptional()
    address?: string;

    @IsString()
    @IsOptional()
    city?: string;
}