import { InputType, Int, Field } from '@nestjs/graphql';
import { IsBoolean, IsIn, IsNotEmpty, IsOptional, IsString } from 'class-validator';

@InputType()
export class CreateComplaintInput {

  @Field( () => String )
  @IsString()
  @IsNotEmpty()
  title: string;

  @Field( () => String )
  @IsString()
  @IsNotEmpty()
  description: string;

  // @Field( () => String, { defaultValue: "Sin detalles - A implementar" } )
  // @IsString()
  // details: string;

  @Field( () => String )
  @IsString()
  dateOfPurchase: string;

  @Field( () => String )
  @IsString()
  invoiceNumber: string;

  @Field( () => String )
  @IsString()
  productCode: string;

  @Field( () => Boolean, { defaultValue: false } )
  @IsBoolean()
  @IsNotEmpty()
  solved: boolean;

}
