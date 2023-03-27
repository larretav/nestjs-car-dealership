import { IsString, MinLength } from "class-validator";

export class CreateBrandDto {

  @IsString({message: 'name debe ser un string baboso'})
  @MinLength(1)
  name: string;
}
