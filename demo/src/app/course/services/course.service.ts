import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Course } from 'src/app/models/course';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  public courses: Course[] = [

    {
      id_: '1',
      courseName: 'Angular',
    },
    {
      id_: '2',
      courseName: 'C',
    },
    {
      id_: '3',
      courseName: 'Java',
    },
    {
      id_: '4',
      courseName: 'React',
    },
    {
      id_: '5',
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
    let indice = this.courses.findIndex((c: Course) => c.id_ === course.id_);

    if(indice > -1){
      this.courses[indice] = course;
      this.courses$.next(this.courses);
    }
  }

  removeStudent(course: Course): void {
    let indice = this.courses.findIndex((c: Course) => c.id_ === course.id_);

    if(indice > -1){
      this.courses.splice(indice, 1);
      this.courses$.next(this.courses);
    }
  }


}
