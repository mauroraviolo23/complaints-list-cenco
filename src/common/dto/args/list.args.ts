import { ArgsType, Field } from "@nestjs/graphql";
import { IsBoolean, IsOptional } from "class-validator";

@ArgsType()
export class ListByUserArgs { 

    @Field( () => Boolean, { defaultValue: false })
    @IsOptional()
    @IsBoolean()
    listByUser?: boolean;

}