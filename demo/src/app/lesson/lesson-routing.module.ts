import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LessonsListComponent } from './components/lessons-list/lessons-list.component';
import { LessonsAddComponent } from './components/lessons-add/lessons-add.component';
import { LessonsEditComponent } from './components/lessons-edit/lessons-edit.component';
import { SessionGuard } from '../core/guards/session.guard';
import { AdminGuard } from '../core/guards/admin.guard';

const routes: Routes = [

    { path: '', canActivateChild: [ SessionGuard ] , children: [
      { path: 'list', component: LessonsListComponent },
      { path: 'add', component:LessonsAddComponent , canActivate: [AdminGuard] },
      { path: 'edit', component: LessonsEditComponent , canActivate: [AdminGuard] },
    ]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LessonRoutingModule { }
