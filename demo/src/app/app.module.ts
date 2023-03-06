import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';
import { MaterialModule } from './material.module';
//import { StudentNamePipe } from './pipes/student-name.pipe';
import { TitleSizeDirective } from './directives/title-size.directive';
import { NotFoundComponent } from './core/not-found/not-found.component';
import { HomeComponent } from './core/home/home.component';
import { StudentsModule } from './students/students.module';
import { CourseModule } from './course/course.module';
import { LessonModule } from './lesson/lesson.module';
import { CoreModule } from './core/core.module';

@NgModule({
    declarations: [
        AppComponent,
        ToolbarComponent,
        NavbarComponent,
        FooterComponent,
       // StudentNamePipe,
        TitleSizeDirective,
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
        CoreModule,
        //StudentsModule,
        //CourseModule,
        //LessonModule,

    ]
})
export class AppModule { }
