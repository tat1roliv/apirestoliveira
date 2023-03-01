import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesListComponent } from './components/courses-list/courses-list.component';
import { CoursesAddComponent } from './components/courses-add/courses-add.component';
import { CoursesEditComponent } from './components/courses-edit/courses-edit.component';



const routes: Routes = [
  {path: 'courses' , children: [
    {path: 'list', component: CoursesListComponent},
    {path: 'add', component: CoursesAddComponent},
    {path: 'edit', component: CoursesEditComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CourseRoutingModule { }
