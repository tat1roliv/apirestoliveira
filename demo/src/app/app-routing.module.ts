import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormStudentComponent } from './core/form-student/form-student.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { StudentsTempComponent } from './students/components/students-temp/students-temp.component';
import { StudentsAddComponent } from './students/components/students-add/students-add.component';
import { StudentsEditarComponent } from './students/components/students-editar/students-editar.component';

//import { CoursesListComponent } from './course/components/courses-list/courses-list.component';
//import { CoursesAddComponent } from './course/components/courses-add/courses-add.component';
//import { CoursesEditComponent } from './course/components/courses-edit/courses-edit.component';

import { LessonsListComponent } from './lesson/components/lessons-list/lessons-list.component';//
import { LessonsAddComponent } from './lesson/components/lessons-add/lessons-add.component';//
import { LessonsEditComponent } from './lesson/components/lessons-edit/lessons-edit.component';//

const routes: Routes = [

  {path: 'students' , children: [
    {path: 'list', component: StudentsTempComponent},
    {path: 'add', component: StudentsAddComponent},
    {path: 'edit', component: StudentsEditarComponent},
  ]},

  /*
  {path: 'courses' , children: [
    {path: 'list', component: CoursesListComponent},
    {path: 'add', component: CoursesAddComponent},
    {path: 'edit', component: CoursesEditComponent},
  ]},

  {path: 'lessons' , children: [
    {path: 'list', component: LessonsListComponent},
    {path: 'add', component: LessonsAddComponent},
    {path: 'edit', component: LessonsEditComponent},
  ]},
*/
  {path: 'login' , component: FormStudentComponent},
  {path: 'home' , component: HomeComponent},
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
