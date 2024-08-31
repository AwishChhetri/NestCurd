import { IsString, IsInt, IsOptional, IsEmail } from 'class-validator';

export class CreateEmployeeDto {
  @IsString()
  readonly name: string;

  @IsInt()
  @IsOptional()
  readonly age?: number;

  @IsString()
  @IsOptional()
  readonly position?: string;

  @IsString()
  @IsOptional()
  readonly department?: string;

  @IsEmail()
  readonly email: string;
}

export class UpdateEmployeeDto {
  @IsString()
  @IsOptional()
  readonly name?: string;

  @IsInt()
  @IsOptional()
  readonly age?: number;

  @IsString()
  @IsOptional()
  readonly position?: string;

  @IsString()
  @IsOptional()
  readonly department?: string;

  @IsEmail()
  @IsOptional()
  readonly email?: string;
}
