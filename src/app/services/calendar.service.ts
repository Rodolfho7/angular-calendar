import { Injectable } from '@angular/core';
import { Reminder } from '@interfaces/reminder';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  private reminders$ = new BehaviorSubject<Reminder[]>([]);

  constructor() { }

  createReminder(data: Reminder): void {
    let reminders = this.reminders$.value;
    reminders.push({
      ...data,
      id: uuid()
    });
    this.reminders$.next(reminders);
  }

  deleteReminder(reminderId: string): void {
    let remindersToKeep = this.reminders$.value.filter((r) => r.id !== reminderId);
    this.reminders$.next([...remindersToKeep]);
  }

  updateReminder(reminder: Reminder): void {
    let remindersToKeep = this.reminders$.value.filter((r) => r.id !== reminder.id);
    this.reminders$.next([...remindersToKeep, reminder]);
  }

  listRemindersWithDateFilter(filterDate: string): Observable<Reminder[]> {
    return this.reminders$.pipe(
      map((reminders) => reminders.filter((r) => r.yearMonth == filterDate))
    );
  }

  listReminders(): Reminder[] {
    return this.reminders$.value;
  }
}
