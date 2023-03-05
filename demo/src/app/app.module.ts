import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { FormStudentComponent } from './core/form-student/form-student.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
//import { StudentNamePipe } from './pipes/student-name.pipe';
import { TitleSizeDirective } from './directives/title-size.directive';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './core/home/home.component';
import { StudentsModule } from './students/students.module';
//import { StudentsAddComponent } from './students/components/students-add/students-add.component';
//import { StudentsTempComponent } from './students/components/students-temp/students-temp.component';
//import { StudentsEditarComponent } from './students/components/students-editar/students-editar.component';
import { CourseModule } from './course/course.module';
import { LessonModule } from './lesson/lesson.module';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        NavbarComponent,
        FooterComponent,
        FormStudentComponent,
       // StudentNamePipe,
        TitleSizeDirective,
       // StudentsTempComponent,//
        //StudentsAddComponent,//
        //StudentsEditarComponent,//
        NotFoundComponent,
        HomeComponent,
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        ReactiveFormsModule,
        FormsModule,
        MaterialModule,
        HttpClientModule,
        //StudentsModule,
        //CourseModule,
        //LessonModule,

    ]
})
export class AppModule { }
