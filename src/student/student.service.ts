import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateStudentInput } from './create-student.input';
import { v4 as uuid } from 'uuid';

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student) private studentRespository: Repository<Student>,
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
}
