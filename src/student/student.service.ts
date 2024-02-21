import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { In, MongoRepository, Repository } from 'typeorm';
import { v4 as uuid } from 'uuid';
import { CreateStudentInput } from './create-student.input';
import { Student } from './student.entity';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRespository: MongoRepository<Student>,
  ) {}

  createStudent(createStudentInput: CreateStudentInput): Promise<Student> {
    const student = this.studentRespository.create({
      id: uuid(),
      ...createStudentInput,
    });
    return this.studentRespository.save(student);
  }

  getStudents(): Promise<Student[]> {
    return this.studentRespository.find({});
  }

  getStudent(id: string): Promise<Student> {
    return this.studentRespository.findOneBy({ id });
  }

  getManyStudents(studentIds: string[]): Promise<Student[]> {
    return this.studentRespository.find({
      where: {
        id: { $in: studentIds },
      },
    });
  }
}
