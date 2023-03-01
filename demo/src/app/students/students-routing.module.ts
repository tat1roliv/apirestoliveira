import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentsAddComponent } from './components/students-add/students-add.component';
import { StudentsEditarComponent } from './components/students-editar/students-editar.component';
import { StudentsTempComponent } from './components/students-temp/students-temp.component';


const routes: Routes = [
  /*
  {path: 'students' , children: [
    {path: 'list', component: StudentsTempComponent},
    {path: 'add', component: StudentsAddComponent},
    {path: 'edit', component: StudentsEditarComponent},
  ]},
*/
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
