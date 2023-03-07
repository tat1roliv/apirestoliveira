import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { Router } from '@angular/router';
import { Student } from '../../../models/student';
//import { StudentService } from '../../../services/student.service';
import { Input, Output , EventEmitter } from '@angular/core';

import { StudentsService } from '../../services/students.service';
import { SessionService } from 'src/app/core/services/session.service';
import { Session } from 'src/app/models/session';
import { MatDialog } from '@angular/material/dialog';
import { StudentsEditarComponent } from '../students-editar/students-editar.component';

@Component({
  selector: 'app-students-temp',
  templateUrl: './students-temp.component.html',
  styleUrls: ['./students-temp.component.css']
})

export class StudentsTempComponent implements OnInit, OnDestroy {

 @Input() studentsTemp: Student[] = [];

 studentsTemp$!: Observable<Student[]>;
 suscripcion!: Subscription;
 session$!: Observable<Session>

  constructor(
    public studentsService: StudentsService,
    private router: Router,
    private session: SessionService,
    public dialog: MatDialog,
    ) {
  }

  ngOnInit() {
    this.studentsTemp$ = this.studentsService.getStudentsObservable();
    this.session$ = this.session.getSession()
  }

  removeStudent(student: Student): void {
    this.studentsService.removeStudent(student).subscribe((student: Student) =>{
      alert(`student ${student.name} ${student.lastName} deleted` );
      this.studentsTemp$ = this.studentsService.getStudentsObservable();
    })
  }

  //updated to dialog
  editStudentRedirect(student: Student){
    this.router.navigate(['students/edit', student])
  }

  openModalDialog(student: Student){
    this.dialog.open(StudentsEditarComponent, {
      data: student
    }).afterClosed().subscribe((student: Student) => {
      alert(`student ${student.name} edited`)
      this.studentsTemp$ = this.studentsService.getStudentsObservable()
    })
  }

  ngOnDestroy() {

  }


}
