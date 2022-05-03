import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.scss']
})
export class CalendarComponent {
  dateToday: string = '';

  constructor() { }

  changeMonth(num: number): void {
    // let date = this.dateService.getDate();
    // date.setMonth(date.getMonth() + num);
    // this.dateService.setDate(date);
    // this.initializeCalendar();
  }
}
