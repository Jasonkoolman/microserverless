import { IsNotEmpty, IsString } from "class-validator";
 
export default class CreateProductSchema {
    @IsString()
    @IsNotEmpty()
    name: string;

    @IsString()
    @IsNotEmpty()
    description: string;
}
