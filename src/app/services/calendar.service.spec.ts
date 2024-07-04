import { TestBed } from '@angular/core/testing';

import { CalendarService } from './calendar.service';
import { TasksService } from './tasks.service';


class TasksServiceMock {

}

describe('CalendarService', () => {
  let service: CalendarService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{
        provide: TasksService, useClass: TasksServiceMock
      }]
    }).compileComponents().then(() => {
      service = TestBed.inject(CalendarService);
    });
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
