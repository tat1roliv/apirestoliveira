import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { env } from 'src/environment/environment';
import { Course } from 'src/app/models/course';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  constructor(
    private http: HttpClient
  ){ }


  getCoursesObservable(): Observable<Course[]>{
    return this.http.get<Course[]>(`${env.apiURLCourse}/courses`).pipe(
      catchError(this.getError)
    )
  }

  addCourse(course: Course): Observable<Course>{
    return this.http.post<Course>(`${env.apiURLCourse}/courses`, course).pipe(
      catchError(this.getError)
    )
  }

  editServCourse(course: Course):  Observable<Course>{
    return this.http.put<Course>(`${env.apiURLCourse}/courses/${course.id}`, course).pipe(
      catchError(this.getError)
    )
  }

  removeCourse(course: Course):  Observable<Course> {
    return this.http.delete<Course>(`${env.apiURLCourse}/courses/${course.id}`).pipe(
      catchError(this.getError)
    )
  }

  private getError(error: HttpErrorResponse){
    if(error.error instanceof ErrorEvent){
      alert(`Client-side error: ${error.message}`);
    }else{
      alert(`Server-side error: ${error.message}`);
    }
    return throwError(() => new Error('New error'));
  }

  }



