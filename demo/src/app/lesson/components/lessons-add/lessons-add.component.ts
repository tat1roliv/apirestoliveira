import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LessonService } from '../../services/lesson.service';
import { Lesson } from '../../../models/lesson';

@Component({
  selector: 'app-lessons-add',
  templateUrl: './lessons-add.component.html',
  styleUrls: ['./lessons-add.component.css']
})
export class LessonsAddComponent implements OnInit{

  formLessons!: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    public lessonsService: LessonService,
    public router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);

      this.formLessons = new FormGroup({
        id_: new FormControl(),
        title: new FormControl(),
        lessonNumber: new FormControl(),
        course: new FormControl(),

      })
    })

  }

  lessonsAdd(){
    let lesson: Lesson = {
      id_: this.formLessons.value.id_,
      title: this.formLessons.value.title,
      lessonNumber: this.formLessons.value.lessonNumber,
      course: this.formLessons.value.course
    }

    this.lessonsService.addLesson(lesson)
    this.router.navigate(['lessons/list']);
  }

}
