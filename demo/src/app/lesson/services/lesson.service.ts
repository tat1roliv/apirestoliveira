import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
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
    return this.http.get<Lesson[]>(`${env.apiURL}/lessons`)
  }

  addLesson(lesson: Lesson): void{

  }

  editServLesson(lesson: Lesson): void {

  }


  removeLesson(lesson: Lesson): Observable<Lesson> {
    return this.http.delete<Lesson>(`${env.apiURL}/lessons/${lesson.id}`)
    }

  /*
  public lessons: Lesson[] = [
    {
      id:'1',
      title: 'class number',
      lessonNumber: '1',
      course: 'angular',
    },
    {
      id: '2',
      title: 'class number',
      lessonNumber: '1',
      course: 'C',
    },
    {
      id: '3',
      title: 'class number',
      lessonNumber: '1',
      course: 'Java',
    },
    {
      id: '4',
      title: 'class number',
      lessonNumber: '1',
      course: 'React',
    },
    {
      id: '5',
      title: 'class number',
      lessonNumber: '1',
      course: 'Cobol',
    },

  ];



  public lessons$!: BehaviorSubject<Lesson[]>;

  constructor() {
    //observable/subject
    this.lessons$ = new BehaviorSubject<Lesson[]>(this.lessons);
  }


  getLessonsObservable(): Observable<Lesson[]>{
    return this.lessons$.asObservable();
  }

  addLesson(lesson: Lesson): void{
    this.lessons.push(lesson);
    this.lessons$.next(this.lessons);
    console.log('added from service', this.lessons);
  }

  editServLesson(lesson: Lesson): void {
    let indice = this.lessons.findIndex((le: Lesson) => le.id === lesson.id);

    if(indice > -1){
      this.lessons[indice] = lesson;
      this.lessons$.next(this.lessons);
    }
  }

  removeStudent(lesson: Lesson): void {
    let indice = this.lessons.findIndex((l: Lesson) => l.id === lesson.id);

    if(indice > -1){
      this.lessons.splice(indice, 1);
      this.lessons$.next(this.lessons);
    }
  }
  */
}
