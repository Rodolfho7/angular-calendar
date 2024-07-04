import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatIconModule } from '@angular/material/icon';
import { Observable, of } from 'rxjs';
import { Reminder } from '../../interfaces/reminder';
import { CalendarService } from '../../services/calendar.service';
import { DateService } from '../../services/date.service';
import { CalendarDayComponent } from './calendar-day/calendar-day.component';
import { CalendarHeaderComponent } from './calendar-header/calendar-header.component';
import { CalendarComponent } from './calendar.component';

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

describe('CalendarComponent', () => {
  let component: CalendarComponent;
  let fixture: ComponentFixture<CalendarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [
        CalendarComponent,
        CalendarDayComponent,
        CalendarHeaderComponent
      ],
      imports: [ MatDialogModule, MatIconModule ],
      providers: [
        { provide: DateService, useClass: DateServiceMock },
        { provide: CalendarService, useClass: CalendarServiceMock }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CalendarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
