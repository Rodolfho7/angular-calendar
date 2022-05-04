import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Reminder } from '@interfaces/reminder';
import { DateService } from '@services/date.service';

@Component({
  selector: 'app-calendar-day',
  templateUrl: './calendar-day.component.html',
  styleUrls: ['./calendar-day.component.scss']
})
export class CalendarDayComponent implements OnChanges {

  @Input() dayInCalendar: number = 1;
  @Input() today: number = 1;
  @Input() currentMonth: number = 1;
  @Input() currentYear: number = 1;
  @Input() disabled = false;
  @Input() MonthReminders: Reminder[] = [];
  @Output() reminderEdit = new EventEmitter<Reminder>();

  reminders: Reminder[] = [];

  isToday = false;
  isWeekend = false;
  dayName: string = '';

  month = new Date().getMonth();
  year = new Date().getFullYear();

  constructor(private dateService: DateService) { }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['currentMonth']) {
      const currentDate = new Date(this.currentYear, this.currentMonth, this.dayInCalendar);
      this.dayName = this.dateService.getNameDay(currentDate);
      const weekDay = this.dateService.getDayOfWeek(currentDate);
      this.isWeekend = weekDay === 0 || weekDay === 6;
      this.isToday = 
        this.today === this.dayInCalendar
        && this.currentMonth === this.month
        && this.currentYear === this.year;
    }

    if (changes['MonthReminders']) {
      const filter = `${this.currentYear}-${this.fixString(this.currentMonth + 1)}-${this.fixString(this.dayInCalendar)}`;
      this.reminders = this.MonthReminders.filter((r) => r.dateTime.includes(filter));
    }
  }

  openReminderDialog(reminder: Reminder): void {
    this.reminderEdit.emit(reminder);
  }

  private fixString(value: number): string {
    return String(value).padStart(2, '0');
  }
}
