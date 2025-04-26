import { Prop, Schema } from "@nestjs/mongoose";

@Schema({timestamps: true})
export class Contact{

    @Prop()
    name: string;

    @Prop()
    title: string;

    @Prop()
    email: string;

    @Prop()
    phone: string;

    @Prop()
    address: string;

    @Prop()
    city: string;
}