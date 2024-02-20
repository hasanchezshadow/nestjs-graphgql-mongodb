import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType('Student')
export class StudentType {
  @Field(() => String)
  id: string;

  @Field(() => String)
  firstName: string;

  @Field(() => String)
  lastName: string;
}
