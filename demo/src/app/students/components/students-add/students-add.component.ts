import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { Student } from 'src/app/models/student';

@Component({
  selector: 'app-students-add',
  templateUrl: './students-add.component.html',
  styleUrls: ['./students-add.component.css']
})
export class StudentsAddComponent  implements OnInit{

  formStudents!: FormGroup;

  constructor(
    public activatedRoute: ActivatedRoute,
    public studentsService: StudentsService,
    public router: Router
  ){}

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);

      this.formStudents = new FormGroup({
        id: new FormControl(''),
        name: new FormControl(''),
        lastName: new FormControl(''),
        email: new FormControl(''),
        course: new FormControl(''),
      })
    })

  }

  studentsAdd(){
    let student: Student = {
      //id: this.formStudents.value.id,
      id: '',
      name: this.formStudents.value.name,
      lastName: this.formStudents.value.lastName,
      email: this.formStudents.value.email,
      course: this.formStudents.value.course,
    }

    this.studentsService.addStudent(student).subscribe((student: Student) => {
      alert(`student ${student.name} ${student.lastName} added` );
      this.router.navigate(['students/list']);
    })

  }

}
