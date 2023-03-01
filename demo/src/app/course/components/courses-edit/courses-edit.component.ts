import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses-edit',
  templateUrl: './courses-edit.component.html',
  styleUrls: ['./courses-edit.component.css']
})
export class CoursesEditComponent implements OnInit{

  formCourses!: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    private coursesService: CourseService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);

      this.formCourses = new FormGroup({
        id_: new FormControl(parametros.get('id_'|| '')),
        courseName: new FormControl(parametros.get('courseName' || '')),

      })
    })

  }

  coursesEdit(){
    let course: Course = {
      id_: this.formCourses.value.id_,
      courseName: this.formCourses.value.courseName,

    }

    this.coursesService.editServCourse(course)
    this.router.navigate(['courses/list']);
  }
}
