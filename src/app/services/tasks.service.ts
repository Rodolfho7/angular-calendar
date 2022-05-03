import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, DocumentReference } from '@angular/fire/compat/firestore';
import { Reminder } from '@interfaces/reminder';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TasksService {

  reminders: AngularFirestoreCollection<Reminder>;

  constructor(private afs: AngularFirestore) {
    this.reminders = this.afs.collection('reminders');
  }

  getTaksByYearAndMonth(yearMonthFilter: string): Observable<Reminder[]> {
    return this.afs.collection<Reminder>(
      'reminders', doc => doc.where('yearMonth', '==', yearMonthFilter)
    ).snapshotChanges().pipe(
      map((actions) => actions.map((a) => {
        const data = a.payload.doc.data() as Omit<Reminder, 'id'>;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  saveTask(reminder: Reminder): Promise<DocumentReference<Reminder>> {
    return this.reminders.add(reminder);
  }

  updateTask(reminder: Reminder): Promise<void> {
    const { id, ...rest } = reminder;
    return this.reminders.doc(id).update(rest);
  }

  deleteTask(reminderId: string): Promise<void> {
    return this.reminders.doc(reminderId).delete();
  }
}
