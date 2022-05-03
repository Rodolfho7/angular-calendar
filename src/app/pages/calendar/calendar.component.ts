import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  dateToday: string = 'May 2022';
  daysOffset: number[] = [28, 29, 30];
  monthDays: number[] = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16];

  currentDay = 0;
  currentMonth = 1;
  currentYear = 0;

  constructor() { }

  changeMonth(num: number): void {
    // let date = this.dateService.getDate();
    // date.setMonth(date.getMonth() + num);
    // this.dateService.setDate(date);
    // this.initializeCalendar();
  }
}
