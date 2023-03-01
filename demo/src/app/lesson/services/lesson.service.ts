import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Lesson } from 'src/app/models/lesson';

@Injectable({
  providedIn: 'root'
})
export class LessonService {

  public lessons: Lesson[] = [
    {
      id_:'1',
      title: 'class number',
      lessonNumber: '1',
      course: 'angular',
    },
    {
      id_: '2',
      title: 'class number',
      lessonNumber: '1',
      course: 'C',
    },
    {
      id_: '3',
      title: 'class number',
      lessonNumber: '1',
      course: 'Java',
    },
    {
      id_: '4',
      title: 'class number',
      lessonNumber: '1',
      course: 'React',
    },
    {
      id_: '5',
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
    let indice = this.lessons.findIndex((le: Lesson) => le.id_ === lesson.id_);

    if(indice > -1){
      this.lessons[indice] = lesson;
      this.lessons$.next(this.lessons);
    }
  }

  removeStudent(lesson: Lesson): void {
    let indice = this.lessons.findIndex((l: Lesson) => l.id_ === lesson.id_);

    if(indice > -1){
      this.lessons.splice(indice, 1);
      this.lessons$.next(this.lessons);
    }
  }
}
