import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from 'src/app/models/lesson';
import { LessonService } from '../../services/lesson.service';

@Component({
  selector: 'app-lessons-edit',
  templateUrl: './lessons-edit.component.html',
  styleUrls: ['./lessons-edit.component.css']
})
export class LessonsEditComponent implements OnInit{

  formLessons!: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    private lessonsService: LessonService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);

      this.formLessons = new FormGroup({
        id_: new FormControl(parametros.get('id_'|| '')),
        title: new FormControl(parametros.get('title' || '')),
        lessonNumber: new FormControl(parametros.get('lessonNumber' || '')),
        course: new FormControl(parametros.get('course' || '')),
      })
    })

  }

  lessonsEdit(){
    let lesson: Lesson = {
      id_: this.formLessons.value.id_,
      title: this.formLessons.value.title,
      lessonNumber: this.formLessons.value.lessonNumber,
      course: this.formLessons.value.course

    }

    this.lessonsService.editServLesson(lesson)
    this.router.navigate(['lessons/list']);
  }

}
