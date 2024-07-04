import { TestBed } from '@angular/core/testing';

import { DateService } from './date.service';

describe('DateService', () => {
  let service: DateService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DateService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should call createDate with 14', () => {
    let createDateSpy = jest.spyOn(service, 'saveNumber');
    service.saveNumber(14);
    expect(createDateSpy).toHaveBeenCalledWith(14);
    expect(service.numero).toBe(14);
  });
});
