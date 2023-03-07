import { Component, OnInit, Inject } from '@angular/core';
import { FormControl, FormGroup , Validators} from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { StudentsService } from '../../services/students.service';
import { Student } from 'src/app/models/student';
import { Observable } from 'rxjs';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-students-editar',
  templateUrl: './students-editar.component.html',
  styleUrls: ['./students-editar.component.css']
})
export class StudentsEditarComponent implements OnInit{

  formStudents!: FormGroup;
  studentsTemp$!: Observable<Student[]>;

  constructor(
    //public activatedRoute: ActivatedRoute,
    private studentsService: StudentsService,
    private router: Router,
    private dialogRef: MatDialogRef<StudentsEditarComponent>,
    @Inject(MAT_DIALOG_DATA) public student: Student
  ){}

  ngOnInit(): void {
    this.studentsTemp$ = this.studentsService.getStudentsObservable();
    this.formStudents = new FormGroup({
      id: new FormControl(this.student.id),
      name: new FormControl(this.student.name),
      lastName: new FormControl(this.student.lastName),
      email: new FormControl(this.student.email),
      course: new FormControl(this.student.course),
    })

    /*
    this.activatedRoute.paramMap.subscribe((parametros) => {
      console.log(parametros);

      this.formStudents = new FormGroup({
        id: new FormControl(parametros.get('id'|| '')),
        name: new FormControl(parametros.get('name' || '')),
        lastName: new FormControl(parametros.get('lastName'|| '')),
        email: new FormControl(parametros.get('email'|| '')),
        course: new FormControl(parametros.get('course'|| '')),
      })
    })
    */

  }

  studentsEdit(){
    let student: Student = {
      id: this.formStudents.value.id,
      name: this.formStudents.value.name,
      lastName: this.formStudents.value.lastName,
      email: this.formStudents.value.email,
      course: this.formStudents.value.course,
    }

    this.studentsService.editServStudent(student).subscribe((student: Student) =>{
      this.dialogRef.close(student);
    })
    //this.dialogRef.close;
    //this.router.navigate(['students/list']);
  }

}


