import { Field, InputType } from "@nestjs/graphql";
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";

@InputType()
export class LogInInput {

    @Field( () => String )
    @IsEmail()
    email: string;

    @Field( () => String )
    @MinLength(8)
    password: string;
}