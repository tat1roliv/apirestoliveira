import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { Student } from 'src/app/models/student';


@Component({
  selector: 'app-students-editar',
  templateUrl: './students-editar.component.html',
  styleUrls: ['./students-editar.component.css']
})
export class StudentsEditarComponent implements OnInit{

  formStudents!: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);

      this.formStudents = new FormGroup({
        id_: new FormControl(parametros.get('id_'|| '')),
        name: new FormControl(parametros.get('name' || '')),
        lastName: new FormControl(parametros.get('lastName'|| '')),
        email: new FormControl(parametros.get('email'|| '')),
        course: new FormControl(parametros.get('course'|| '')),
      })
    })

  }

  studentsEdit(){
    let student: Student = {
      id_: this.formStudents.value.id_,
      name: this.formStudents.value.name,
      lastName: this.formStudents.value.lastName,
      email: this.formStudents.value.email,
      course: this.formStudents.value.course,
    }

    this.studentsService.editServStudent(student);
    this.router.navigate(['students/list']);
  }

}


