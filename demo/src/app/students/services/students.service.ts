import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, catchError, Observable, throwError } from 'rxjs';
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
    return this.http.get<Student[]>(`${env.apiURL}/students`, {
      headers: new HttpHeaders({
        'content-type': 'application/json',
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.getError)
    )
  }

  addStudent(student: Student): Observable<Student>{
    return this.http.post<Student>(`${env.apiURL}/students`, student ,  {
      headers: new HttpHeaders({
        'encoding': 'UTF-8'
      })
    }).pipe(
      catchError(this.getError)
    )
  }

  editServStudent(student: Student): Observable<Student>{
    return this.http.put<Student>(`${env.apiURL}/students/${student.id}`, student).pipe(
      catchError(this.getError)
    )
  }

  removeStudent(student: Student): Observable<Student> {
    return this.http.delete<Student>(`${env.apiURL}/students/${student.id}`).pipe(
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


