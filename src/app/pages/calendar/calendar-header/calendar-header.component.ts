import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-calendar-header',
  templateUrl: './calendar-header.component.html',
  styleUrls: ['./calendar-header.component.scss']
})
export class CalendarHeaderComponent {

  @Input() dateToday = '';
  @Output() changeMonth = new EventEmitter<number>();
  @Output() openAddReminder = new EventEmitter();

  constructor() { }

  handleAddReminder() {
    this.openAddReminder.emit();
  }
}
