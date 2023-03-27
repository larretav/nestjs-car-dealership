import { IsOptional, IsString, IsUUID } from "class-validator";

export class UpdateCarDto {

  @IsString({ message: 'brand debería ser un string' })
  @IsUUID()
  @IsOptional()
  readonly id?: string;

  @IsString({ message: 'brand debería ser un string' })
  @IsOptional()
  readonly brand?: string;

  @IsString({ message: 'model debería ser un string' })
  @IsOptional()
  readonly model?: string;
}