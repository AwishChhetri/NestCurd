import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { EmployeeModule } from './employee.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb+srv://abishchhetri2502:yeXrEIFsKZPdkohn@cluster0.jeau3.mongodb.net/studentdb?retryWrites=true&w=majority&appName=Cluster0'),
    EmployeeModule,
  ],
})
export class AppModule {}
