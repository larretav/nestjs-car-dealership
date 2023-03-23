import { IsString } from "class-validator";

export class CreateCarDto {

  @IsString({message: 'brand debería ser un string'})
  readonly brand: string;
  
  @IsString({message: 'model debería ser un string'})
  readonly model: string;
}