import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ContactModule } from './modules/contacts/contact.module';
import { UserModule } from './modules/users/user.module';
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/cms'),
    ContactModule,
    UserModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
