import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AppComponent} from './app.component';
import {SimpleFormComponent} from './simple-form/simple-form.component';
import {MailService} from './services/mail.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HabitListComponent} from './habit-list/habit-list.component';
import {HabitFormComponent} from './habit-form/habit-form.component';
import {HttpClientModule} from '@angular/common/http';
import {HomeComponent} from './home/home.component';
import {AboutComponent} from './about/about.component';
import {HabitDashboardComponent} from './habit-dashboard/habit-dashboard.component';
import { AboutdetailComponent } from './aboutdetail/aboutdetail.component';
import { SystemCampingComponent } from './system-camping/system-camping.component';
import { SystemCampingInfoComponent } from './system-camping-info/system-camping-info.component';
import { SystemCampingItemComponent } from './system-camping-item/system-camping-item.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { CoursesComponent } from './courses/courses.component';
import {CoursesService} from './services/courses.service';
import {LessonsService} from './services/lessons.service';
import { CourseListComponent } from './courses/course-list/course-list.component';
import { CourseDetailComponent } from './courses/course-detail/course-detail.component';
import { CourseDebugComponent } from './courses/course-debug/course-debug.component';
import { LessonsComponent } from './lessons/lessons.component';
import { LessonListComponent } from './lessons/lesson-list/lesson-list.component';
import { LessonDetailComponent } from './lessons/lesson-detail/lesson-detail.component';
import { LessonDebugComponent } from './lessons/lesson-debug/lesson-debug.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'courses', component: CoursesComponent},
  {path: 'lessons', component: LessonsComponent},
  {path: 'dashboard', component: HabitDashboardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'about/:id', component: AboutdetailComponent},
  {path: 'system', redirectTo: '/system/1', pathMatch: 'full'},
  {
    path: 'system/:id',
    component: SystemCampingComponent,
    children:[{
      path:'info',
      component: SystemCampingInfoComponent
    },{
      path:'item',
      component: SystemCampingItemComponent
    }]
  },
  {path: '**', redirectTo: '/courses', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    HabitListComponent,
    HabitFormComponent,
    HomeComponent,
    AboutComponent,
    HabitDashboardComponent,
    AboutdetailComponent,
    SystemCampingComponent,
    SystemCampingInfoComponent,
    SystemCampingItemComponent,
    CoursesComponent,
    CourseListComponent,
    CourseDetailComponent,
    CourseDebugComponent,
    LessonsComponent,
    LessonListComponent,
    LessonDetailComponent,
    LessonDebugComponent,
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
    HttpClientModule,
    FormsModule,
     ReactiveFormsModule,
     BrowserAnimationsModule,
     MaterialModule
  ],
  providers: [
    {provide: 'mail', useClass: MailService},
    {provide: 'api', useValue: 'https://lakhexpress.herokuapp.com/api/v1'},
    CoursesService,
    LessonsService,
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
