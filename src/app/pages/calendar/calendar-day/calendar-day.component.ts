import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Reminder } from '@interfaces/reminder';
import { DateService } from '@services/date.service';
import { Observable, of } from 'rxjs';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnChanges {

  reminders$: Observable<Reminder[]> = of([]);
  @Input() dayInCalendar: number = 1;
  @Input() today: number = 1;
  @Input() currentMonth: number = 1;
  @Input() currentYear: number = 1;
  @Input() disabled = false;

  isToday = false;
  isWeekend = false;
  dayName: string = '';

  constructor(private dateService: DateService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentMonth']) {
      this.dayName = this.dateService.getNameDay(new Date(this.currentYear, this.currentMonth, this.dayInCalendar));
      const weekDay = this.dateService.getDayOfWeek(new Date(this.currentYear, this.currentMonth, this.dayInCalendar));
      this.isWeekend = weekDay === 0 || weekDay === 6;
    }
  }

  openReminderDialog(reminder: Reminder): void {
    //
  }
}
