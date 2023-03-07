import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
import { Lesson } from 'src/app/models/lesson';
import { env } from 'src/environment/environment';

@Injectable({
  providedIn: 'root'
})
export class LessonService {
  constructor(
    private http: HttpClient
  ){ }

  getLessonsObservable(): Observable<Lesson[]>{
    return this.http.get<Lesson[]>(`${env.apiURL}/lessons`).pipe(
      catchError(this.getError)
    )
  }

  addLesson(lesson: Lesson): Observable<Lesson>{
    return this.http.post<Lesson>(`${env.apiURL}/lessons`, lesson).pipe(
      catchError(this.getError)
    )
  }

  editServLesson(lesson: Lesson): Observable<Lesson> {
    return this.http.put<Lesson>(`${env.apiURL}/lessons/${lesson.id}`, lesson).pipe(
      catchError(this.getError)
    )
  }


  removeLesson(lesson: Lesson): Observable<Lesson> {
    return this.http.delete<Lesson>(`${env.apiURL}/lessons/${lesson.id}`).pipe(
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
