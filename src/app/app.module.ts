import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleFormComponent } from './simple-form/simple-form.component';
import { MailService } from "./mail.service"
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HabitListComponent } from './habit-list/habit-list.component';
import { HabitFormComponent } from './habit-form/habit-form.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleFormComponent,
    HabitListComponent,
    HabitFormComponent
  ],
  imports: [
    BrowserModule, FormsModule, ReactiveFormsModule
  ],
  providers: [
    { provide: 'mail', useClass: MailService },
    { provide: 'api', useValue: "http://localhost:3000" }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
