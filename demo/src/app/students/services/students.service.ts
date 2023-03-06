import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Student } from 'src/app/models/student';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(
    private http: HttpClient
  ){ }

  getStudentsObservable(): Observable<Student[]>{
    return this.http.get<Student[]>(`${env.apiURL}/students`)
  }

  addStudent(student: Student): void{

  }

  editServStudent(student: Student): void {

  }

  removeStudent(student: Student): Observable<Student> {
    return this.http.delete<Student>(`${env.apiURL}/students/${student.id}`)
  }


/*
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
    this.students$ = new BehaviorSubject<Student[]>(this.students);
  }


  getStudentsObservable(): Observable<Student[]>{
    return this.students$.asObservable();
  }

  addStudent(student: Student): void{
    this.students.push(student);
    this.students$.next(this.students);
    console.log('added from service', this.students);
  }

  editServStudent(student: Student): void {
    let indice = this.students.findIndex((s: Student) => s.id_ === student.id_);

    if(indice > -1){
      this.students[indice] = student;
      this.students$.next(this.students);
    }
  }

  removeStudent(student: Student): void {
    let indice = this.students.findIndex((s: Student) => s.id_ === student.id_);

    if(indice > -1){
      this.students.splice(indice, 1);
      this.students$.next(this.students);
    }
  }

*/

}


