import { Field, ID, InputType } from '@nestjs/graphql';
import { IsDateString, IsNotEmpty, IsUUID, MinLength } from 'class-validator';

@InputType()
export class GetLessonInput {
  @IsNotEmpty()
  @Field()
  id: string;
}
@InputType()
export class CreateLessonInput {
  @MinLength(1)
  @Field()
  name: string;

  @IsDateString()
  @Field()
  startDate: string;

  @IsDateString()
  @Field()
  endDate: string;

  @IsUUID(4, { each: true })
  @Field(() => [ID], { defaultValue: [] })
  students: string[];
}
