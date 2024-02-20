import { Injectable } from '@nestjs/common';
import { Lesson } from './lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { v4 as uuid } from 'uuid';
import { CreateLessonInput } from './lesson.input';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRespository: Repository<Lesson>,
  ) {}

  createLesson(createLessonInput: CreateLessonInput): Promise<Lesson> {
    const lesson = this.lessonRespository.create({
      id: uuid(),
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
}
