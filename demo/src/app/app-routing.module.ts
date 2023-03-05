import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { FormStudentComponent } from './core/form-student/form-student.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

import { AuthModule } from './auth/auth.module';


const routes: Routes = [

  { path: 'students' ,
    loadChildren: () => import('./students/students.module').then((m) => m.StudentsModule),
  },

  { path: 'courses' ,
    loadChildren: () => import('./course/course.module').then((m) => m.CourseModule),
  },

  { path: 'lessons' ,
    loadChildren: () => import('./lesson/lesson.module').then((m) => m.LessonModule),
  },

  { path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((modulo) => modulo.AuthModule)
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
