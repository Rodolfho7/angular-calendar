import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ReminderComponent } from '@components/dialogs/reminder/reminder.component';
import { DateService } from '@services/date.service';

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

  constructor(
    private dateService: DateService,
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
  }

  changeMonth(num: number): void {
    let date = this.dateService.getDate();
    date.setMonth(date.getMonth() + num);
    this.dateService.setDate(date);
    this.initializeCalendar();
  }

  addReminder(): void {
    this.dialog.open(ReminderComponent);
  }
}
