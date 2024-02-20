import { Field, ObjectType } from '@nestjs/graphql';
import { StudentType } from 'src/student/student.type';

@ObjectType('Lesson')
export class LessonType {
  @Field(() => String)
  id: string;
  @Field(() => String)
  name: string;
  @Field(() => String)
  startDate: string;
  @Field(() => String)
  endDate: string;
  @Field(() => [StudentType])
  students: string[];
}
