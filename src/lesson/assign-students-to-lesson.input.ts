import { Field, ID, InputType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class AssignStudentsToLessonInput {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => ID)
  lessonId: string;
  @IsUUID(4, { each: true })
  @IsNotEmpty()
  @Field(() => [ID])
  studentsIds: string[];
}
