import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Observable, of } from 'rxjs';
import { Reminder } from 'src/app/interfaces/reminder';
import { CalendarService } from '../../../services/calendar.service';
import { DateService } from '../../../services/date.service';
import { ReminderComponent } from './reminder.component';


class DateServiceMock {
  getListOffsetDays() {
    return null;
  }
  getDayOfMonth() {
    return null;
  }
  getMonth() {
    return null;
  }
  getYear() {
    return null;
  }
  getDateYearAndMonth() {
    return null;
  }
  getListDaysOfMonth() {
    return null;
  }
}

class CalendarServiceMock {
  listRemindersWithDateFilter(yearMonthFilter: string): Observable<Reminder[]> {
    return of([]);
  }
}

describe('ReminderComponent', () => {
  let component: ReminderComponent;
  let fixture: ComponentFixture<ReminderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReminderComponent ],
      imports: [
        BrowserAnimationsModule,
        MatDialogModule,
        MatFormFieldModule,
        MatIconModule,
        MatButtonModule,
        MatSnackBarModule,
        FormsModule,
        ReactiveFormsModule,
        MatInputModule,
      ],
      providers: [
        { provide: DateService, useClass: DateServiceMock },
        { provide: CalendarService, useClass: CalendarServiceMock },
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA, useValue: {} },
      ]
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReminderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
