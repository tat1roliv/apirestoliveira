import { Component, OnInit , Inject} from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from '../../services/course.service';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.css']
})
export class CoursesEditComponent implements OnInit{

  formCourses!: FormGroup;
  coursesList$!: Observable<Course[]>;

  constructor(
    //public activatedRoute: ActivatedRoute,
    private coursesService: CourseService,
    private router: Router,
    private dialogRef: MatDialogRef<CoursesEditComponent>,
    @Inject(MAT_DIALOG_DATA) public course: Course
  ){}

  ngOnInit(): void {

    this.coursesList$ = this.coursesService.getCoursesObservable();
    this.formCourses= new FormGroup({
      id: new FormControl(this.course.id),
      courseName: new FormControl(this.course.courseName),
    })


  }

  coursesEdit(){
    let course: Course = {
      id: this.formCourses.value.id,
      courseName: this.formCourses.value.courseName,
    }

    this.coursesService.editServCourse(course).subscribe((course: Course) =>{
      this.dialogRef.close(course);
    })

  }
}
