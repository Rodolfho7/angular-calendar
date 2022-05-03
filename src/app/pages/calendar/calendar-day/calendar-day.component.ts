import { Component, Input, OnInit } from '@angular/core';
import { DateService } from '@services/date.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnInit {

  reminders$!: Observable<any[]>; // reminders$: Observable<Reminder[]>;
  @Input() dayInCalendar: number = 1;
  @Input() today: number = 1;
  @Input() currentMonth: number = 1;
  @Input() currentYear: number = 1;
  @Input() disabled = false;

  isToday = false;
  isWeekend = false;
  dayName: string = '';

  constructor(private dateService: DateService) { }

  ngOnInit(): void {
    this.dayName = this.dateService.getNameDay(new Date(this.currentYear, this.currentMonth, this.dayInCalendar));
  }

  openReminderForm(reminder?: any /*Reminder */): void {
    //
  }
}
