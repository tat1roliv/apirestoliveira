import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminGuard } from '../core/guards/admin.guard';
import { SessionGuard } from '../core/guards/session.guard';
import { StudentsAddComponent } from './components/students-add/students-add.component';
import { StudentsEditarComponent } from './components/students-editar/students-editar.component';
import { StudentsTempComponent } from './components/students-temp/students-temp.component';


const routes: Routes = [
    { path: '', canActivateChild: [ SessionGuard ] , children: [
      { path: 'list', component: StudentsTempComponent },
      { path: 'add', component:StudentsAddComponent , canActivate: [ AdminGuard ] },
      { path: 'edit', component: StudentsEditarComponent , canActivate: [ AdminGuard ] },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class StudentsRoutingModule { }
