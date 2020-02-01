import { IsOptional, IsString } from "class-validator";
 
export default class CreateProductSchema {
    @IsString()
    @IsOptional()
    name: string;

    @IsString()
    @IsOptional()
    description: string;
}
