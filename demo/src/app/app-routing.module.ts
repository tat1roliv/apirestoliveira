import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanLoad } from '@angular/router';

import { FormStudentComponent } from './core/form-student/form-student.component';
import { HomeComponent } from './core/home/home.component';
import { NotFoundComponent } from './core/not-found/not-found.component';

import { AuthModule } from './auth/auth.module';
import { SessionGuard } from './core/guards/session.guard';


const routes: Routes = [

  { path: 'students' ,
    loadChildren: () => import('./students/students.module').then((m) => m.StudentsModule),
    canLoad: [ SessionGuard ],
  },

  { path: 'courses' ,
    loadChildren: () => import('./course/course.module').then((m) => m.CourseModule),
    canLoad: [ SessionGuard ],
  },

  { path: 'lessons' ,
    loadChildren: () => import('./lesson/lesson.module').then((m) => m.LessonModule),
    canLoad: [ SessionGuard ],
  },

  { path: 'auth',
    loadChildren: () => import('./auth/auth.module').then((modulo) => modulo.AuthModule)
  },

  {path: 'login' , component: FormStudentComponent},
  {path: 'home' , component: HomeComponent , canActivate: [ SessionGuard ]},
  {path: '' , redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: NotFoundComponent} ,

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
