import { ArgsType, Field, registerEnumType } from "@nestjs/graphql";
import { IsArray } from "class-validator";
import { ValidRoles } from "src/auth/enums/valid-roles.enum";

@ArgsType()
export class ValidRolesArgs {

    @Field( () => [String], { nullable: true })
    @IsArray()
    roles: ValidRoles[] = []

}

registerEnumType( ValidRoles, { name: 'ValidRoles', description: 'These are the roles that have been set for the application, being "admin" the type of role with more permissions.' });