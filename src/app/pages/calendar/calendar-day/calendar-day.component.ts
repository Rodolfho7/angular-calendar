import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent {

  reminders$!: Observable<any[]>; // reminders$: Observable<Reminder[]>;
  @Input() dayInCalendar: number = 1;
  @Input() today: number = 1;
  @Input() currentMonth: number = 1;
  @Input() currentYear: number = 1;
  @Input() disabled = false;

  isToday = false;
  isWeekend = false;
  dayName: string = 'day-name';

  constructor() { }

  openReminderForm(reminder?: any /*Reminder */): void {
    //
  }

}
