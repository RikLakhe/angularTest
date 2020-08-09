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

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: HabitDashboardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'about/:id', component: AboutdetailComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'}
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
  ],
  imports: [
    BrowserModule, RouterModule.forRoot(routes), HttpClientModule, FormsModule, ReactiveFormsModule
  ],
  providers: [
    {provide: 'mail', useClass: MailService},
    {provide: 'api', useValue: 'http://localhost:3000'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
