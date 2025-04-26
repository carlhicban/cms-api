import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactModule } from './modules/contacts/contact.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cms'),
    ContactModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
