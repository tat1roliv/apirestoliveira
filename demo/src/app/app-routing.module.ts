import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormStudentComponent } from './core/form-student/form-student.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';
//import { StudentsTempComponent } from './students/components/students-temp/students-temp.component';
//import { StudentsAddComponent } from './students/components/students-add/students-add.component';
//import { StudentsEditarComponent } from './students/components/students-editar/students-editar.component';


const routes: Routes = [
/*
  {path: 'students' , children: [
    {path: 'list', component: StudentsTempComponent},
    {path: 'add', component: StudentsAddComponent},
    {path: 'edit', component: StudentsEditarComponent},
  ]},
*/
  { path: 'students' ,
  loadChildren: () => import('./students/students.module').then((m) => m.StudentsModule),
  },

  { path: 'courses' ,
  loadChildren: () => import('./course/course.module').then((m) => m.CourseModule),
  },

  { path: 'lessons' ,
    loadChildren: () => import('./lesson/lesson.module').then((m) => m.LessonModule),
  },

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
