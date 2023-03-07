import { Component, OnInit , Inject} from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Lesson } from 'src/app/models/lesson';
import { LessonService } from '../../services/lesson.service';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-lessons-edit',
  templateUrl: './lessons-edit.component.html',
  styleUrls: ['./lessons-edit.component.css']
})
export class LessonsEditComponent implements OnInit{

  formLessons!: FormGroup;
  lessonsList$!: Observable<Lesson[]>;

  constructor(
    //public activatedRoute: ActivatedRoute,
    private lessonsService: LessonService,
    private router: Router,
    private dialogRef: MatDialogRef<LessonsEditComponent>,
    @Inject(MAT_DIALOG_DATA) public lesson: Lesson
  ){}

  ngOnInit(): void {

    this.lessonsList$ = this.lessonsService.getLessonsObservable();
    this.formLessons = new FormGroup({

      id: new FormControl(this.lesson.id),
      title: new FormControl(this.lesson.title),
      lessonNumber: new FormControl(this.lesson.lessonNumber),
      course: new FormControl(this.lesson.course),

    })

  }

  lessonsEdit(){
    let lesson: Lesson = {
      id: this.formLessons.value.id,
      title: this.formLessons.value.title,
      lessonNumber: this.formLessons.value.lessonNumber,
      course: this.formLessons.value.course

    }

    this.lessonsService.editServLesson(lesson).subscribe((lesson: Lesson) =>{
      this.dialogRef.close(lesson);
    })
  }

}
