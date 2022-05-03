import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CalendarComponent } from './calendar.component';
import { CalendarRoutingModule } from './calendar-routing.module';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { MatIconModule } from '@angular/material/icon';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ReminderModule } from '@components/dialogs/reminder/reminder.module';

@NgModule({
  declarations: [
    CalendarComponent,
    CalendarDayComponent,
    CalendarHeaderComponent
  ],
  imports: [
    CommonModule,
    CalendarRoutingModule,
    MatButtonModule,
    MatIconModule,
    MatTooltipModule,
    MatDialogModule,
    ReminderModule
  ],
  exports: [ CalendarComponent ]
})
export class CalendarModule { }
