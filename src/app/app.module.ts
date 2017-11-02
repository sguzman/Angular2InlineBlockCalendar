import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CalendarComponent } from './calendar/calendar.component';
import { TopbarComponent } from './topbar/topbar.component';
import { DaysComponent } from './days/days.component';

@NgModule({
  declarations: [
    AppComponent,
    CalendarComponent,
    TopbarComponent,
    DaysComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
