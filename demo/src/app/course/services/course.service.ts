import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { env } from 'src/environment/environment';
import { Course } from 'src/app/models/course';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient
  ){ }


  getCoursesObservable(): Observable<Course[]>{
    return this.http.get<Course[]>(`${env.apiURLCourse}/courses`)
  }

  addCourse(course: Course): void{

  }

  editServCourse(course: Course): void {

  }

  removeCourse(course: Course):  Observable<Course> {
    return this.http.delete<Course>(`${env.apiURLCourse}/courses/${course.id}`)
  }
  }

  /*
  public courses: Course[] = [

    {
      id: '1',
      courseName: 'Angular',
    },
    {
      id: '2',
      courseName: 'C',
    },
    {
      id: '3',
      courseName: 'Java',
    },
    {
      id: '4',
      courseName: 'React',
    },
    {
      id: '5',
      courseName: 'Cobol',
    },
  ];



  public courses$!: BehaviorSubject<Course[]>;

  constructor() {
    //observable/subject
    this.courses$ = new BehaviorSubject<Course[]>(this.courses);
  }


  getCoursesObservable(): Observable<Course[]>{
    return this.courses$.asObservable();
  }

  addStudent(course: Course): void{
    this.courses.push(course);
    this.courses$.next(this.courses);
    console.log('added from service', this.courses);
  }

  editServCourse(course: Course): void {
    let indice = this.courses.findIndex((c: Course) => c.id === course.id);

    if(indice > -1){
      this.courses[indice] = course;
      this.courses$.next(this.courses);
    }
  }

  removeStudent(course: Course): void {
    let indice = this.courses.findIndex((c: Course) => c.id === course.id);

    if(indice > -1){
      this.courses.splice(indice, 1);
      this.courses$.next(this.courses);
    }
  }
*/


