import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Course } from 'src/app/models/course';
import { CourseService } from '../../services/course.service';

@Component({
  selector: 'app-courses-add',
  templateUrl: './courses-add.component.html',
  styleUrls: ['./courses-add.component.css']
})
export class CoursesAddComponent  implements OnInit{

  formCourses!: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    public coursesService: CourseService,
    public router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);

      this.formCourses = new FormGroup({
        id: new FormControl(''),
        courseName: new FormControl(''),

      })
    })

  }

  coursesAdd(){
    let course: Course = {
      id: '',
      courseName: this.formCourses.value.courseName,

    }

    this.coursesService.addCourse(course).subscribe((course: Course) => {
      alert(`course ${course.courseName} added` );
      this.router.navigate(['courses/list']);
    })

  }



}
