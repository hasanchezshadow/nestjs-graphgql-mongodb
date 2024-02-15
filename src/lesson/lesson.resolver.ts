import { Mutation, Query, Resolver } from '@nestjs/graphql';
import { LessonType } from './lesson.type';
import { LessonService } from './lesson.service';

@Resolver((of) => LessonType)
export class LessonResolver {
  constructor(private lessonService: LessonService) {}

  @Query((returns) => LessonType)
  lesson() {
    return <LessonType>{
      id: 'asdadasd',
      name: 'Testing name',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
  }

  @Mutation((returns) => LessonType)
  createLesson() {
    const data = {
      name: 'Testing name',
      startDate: new Date().toISOString(),
      endDate: new Date().toISOString(),
    };
    return this.lessonService.createLesson(data);
  }
}
