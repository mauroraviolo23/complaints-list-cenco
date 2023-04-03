import { CreateComplaintInput } from './create-complaint.input';
import { InputType, Field, Int, PartialType, ID } from '@nestjs/graphql';
import { IsNumber } from 'class-validator';

@InputType()
export class UpdateComplaintInput extends PartialType(CreateComplaintInput) {

  @Field(() => Number )
  @IsNumber()
  id: number;

}
