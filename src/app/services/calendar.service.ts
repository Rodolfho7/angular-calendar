import { Injectable } from '@angular/core';
import { Reminder } from '@interfaces/reminder';
import { Observable } from 'rxjs';
import { TasksService } from '@services/tasks.service';
import { DocumentReference } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class CalendarService {

  constructor(private taskService: TasksService) { }

  createReminder(data: Reminder): Promise<DocumentReference<Reminder>> {
    return this.taskService.saveTask(data);
  }

  deleteReminder(reminderId: string): Promise<void> {
    return this.taskService.deleteTask(reminderId);
  }

  updateReminder(reminder: Reminder): Promise<void> {
    console.log(reminder);
    return this.taskService.updateTask(reminder);
  }

  listRemindersWithDateFilter(yearMonthFilter: string): Observable<Reminder[]> {
    return this.taskService.getTaksByYearAndMonth(yearMonthFilter);
  }
}
