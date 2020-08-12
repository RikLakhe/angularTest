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

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'dashboard', component: HabitDashboardComponent},
  {path: 'about', component: AboutComponent},
  {path: 'about/:id', component: AboutdetailComponent},
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
  {path: '', redirectTo: '/system', pathMatch: 'full'},
  {path: 'system', redirectTo: '/system/1', pathMatch: 'full'}
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
    {provide: 'api', useValue: 'http://localhost:3000'}
  ],
  bootstrap: [AppComponent]
})

export class AppModule {
}
