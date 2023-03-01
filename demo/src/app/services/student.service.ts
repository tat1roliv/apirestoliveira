import { Injectable } from '@angular/core';
//import { HttpClient } from '@angular/common/http';
import { Student } from '../models/student';

import { BehaviorSubject, Observable } from 'rxjs';
import { of , from , filter} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

public students: Student[] = [
  {
    id_: '1',
    name: 'Ada',
    lastName: 'Lovelace',
    email: 'ada@test.com',
    course: 'Angular',
  },
  {
    id_: '2',
    name: 'Alan',
    lastName: 'Turing',
    email: 'a.turing@test.com',
    course: 'C',
  },
  {
    id_: '3',
    name: 'Robert',
    lastName: 'Martin',
    email: 'unclebob@test.com',
    course: 'Java',
  },
  {
    id_: '4',
    name: 'Tim',
    lastName: 'Berners-Lee ',
    email: 'tim@test.com',
    course: 'React',
  },
  {
    id_: '5',
    name: 'Grace',
    lastName: 'Hopper',
    email: 'hopper@test.com',
    course: 'Cobol',
  },
];

public students$!: BehaviorSubject<Student[]>;

constructor() {
  //observable/subject
    this.students$ = new BehaviorSubject(this.students);
    //filter
    from(this.students).pipe(
      filter((student: Student) => student.name === 'Ada')
    ).subscribe((student: Student) => console.log(' from pipe observable en student.service, filter student.name === Ada', student));
}


getSudentsObservable(): Observable<Student[]>{
  return this.students$.asObservable();
}

getSudentsPromise(): Promise<Student[]>{
  return new Promise((resolve, reject) => {
    if(this.students.length > 0){
      resolve(this.students);
    }else{
      reject([]);
    }
  });
}

addStudent(student: Student){
  this.students.push(student);
  this.students$.next(this.students);
  console.log('added from service', this.students);
}


}
