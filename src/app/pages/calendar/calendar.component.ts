import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReminderComponent } from '../../components/dialogs/reminder/reminder.component';
import { Reminder } from '../../interfaces/reminder';
import { CalendarService } from '../../services/calendar.service';
import { DateService } from '../../services/date.service';
import { first, tap } from 'rxjs/operators';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent implements OnInit {
  dateToday: string = '';
  daysOffset: number[] = [];
  monthDays: number[] = [];

  currentDay = 0;
  currentMonth = 1;
  currentYear = 0;

  monthReminders: Reminder[] = [];

  constructor(
    private dateService: DateService,
    private calendarService: CalendarService,
    private dialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.initializeCalendar();
  }

  initializeCalendar(): void {
    this.daysOffset = this.dateService.getListOffsetDays();
    this.currentDay = this.dateService.getDayOfMonth();
    this.currentMonth = this.dateService.getMonth();
    this.currentYear = this.dateService.getYear();
    this.dateToday = this.dateService.getDateYearAndMonth();
    this.monthDays = this.dateService.getListDaysOfMonth();
    this.updateReminders();
  }

  changeMonth(num: number): void {
    this.monthReminders = [];
    let date = this.dateService.getDate();
    date.setMonth(date.getMonth() + num);
    this.dateService.setDate(date);
    this.initializeCalendar();
  }

  updateReminders(): void {
    const dateFilter = `${this.currentYear}-${this.fixString(this.currentMonth + 1)}`;
    this.calendarService.listRemindersWithDateFilter(dateFilter).pipe(
      first(),
      tap((reminders) => this.monthReminders = reminders),
    ).subscribe();
  }

  addReminder(): void {
    this.openModal();
  }

  editReminder(reminderToEdit: Reminder): void {
    this.openModal(reminderToEdit);
  }

  openModal(data: Reminder | null = null): void {
    this.dialog.open(ReminderComponent, { data })
    .afterClosed().subscribe((result) => {
      if (!result) {
        return;
      }
      this.updateReminders();
    });
  }

  fixString(value: number): string {
    return String(value).padStart(2, '0');
  }
}
