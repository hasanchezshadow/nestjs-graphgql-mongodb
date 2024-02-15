import { Injectable } from '@nestjs/common';
import { Lesson } from './lesson.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { LessonType } from './lesson.type';

import { v5 as uuid } from 'uuid';

@Injectable()
export class LessonService {
  constructor(
    @InjectRepository(Lesson) private lessonRespository: Repository<Lesson>,
  ) {}

  createLesson(data: { name; startDate; endDate }): Promise<LessonType> {
    const lesson = this.lessonRespository.create({ id: uuid(), ...data });
    return this.lessonRespository.save(lesson);
  }
}
