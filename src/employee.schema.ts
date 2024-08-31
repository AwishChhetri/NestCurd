import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type EmployeeDocument = Employee & Document;

@Schema()
export class Employee {
  @Prop({ required: true })
  name: string;

  @Prop()
  age: number;

  @Prop()
  position: string;

  @Prop()
  department: string;

  @Prop({ required: true, unique: true })
  email: string;
}

export const EmployeeSchema = SchemaFactory.createForClass(Employee);
