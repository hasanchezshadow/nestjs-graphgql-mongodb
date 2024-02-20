import { Injectable } from '@nestjs/common';
import { Lesson } from './lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';
import { AssignStudentsToLessonInput } from './assign-students-to-lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRespository: Repository<Lesson>,
  ) {}

  createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const lesson = this.lessonRespository.create({
      id: uuid(),
      students: [],
      ...createLessonInput,
    });
    return this.lessonRespository.save(lesson);
  }

  getLesson(id: string): Promise<Lesson> {
    return this.lessonRespository.findOneBy({ id });
  }

  getLessons(): Promise<Lesson[]> {
    return this.lessonRespository.find({});
  }

  async assignStudentsToLesson(
    assignStudentsToLessonInput: AssignStudentsToLessonInput
  ): Promise<Lesson> {
    const { lessonId, studentsIds } = assignStudentsToLessonInput;
    const lesson = await this.getLesson(lessonId);
    lesson.students = [...lesson.students, ...studentsIds];

    return this.lessonRespository.save(lesson);
  }
}
