import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { LessonsAddComponent } from './components/lessons-add/lessons-add.component';
import { LessonsEditComponent } from './components/lessons-edit/lessons-edit.component';




const routes: Routes = [
  {path: 'lessons' , children: [
    {path: 'list', component: LessonsListComponent},
    {path: 'add', component: LessonsAddComponent},
    {path: 'edit', component: LessonsEditComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
