import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DateService {

  public numero: number | null = null;

  private date: Date = new Date();

  constructor() { }

  getDayOfMonth(): number {
    return this.date.getDate();
  }

  getMonth(): number {
    return this.date.getMonth();
  }

  getYear(): number {
    return this.date.getFullYear();
  }

  getDayOfWeek(date: Date = new Date()) {
    return date.getDay();
  }

  setDate(date: Date) {
    this.date = date;
  }

  getDate(): Date {
    return this.date;
  }

  getListOffsetDays(): number[] {
    const daysLastMonth = new Date(this.date.getFullYear(), (this.date.getMonth()), 0).getDate();
    const offsetFirstDayOfCurrentMonth = new Date(this.date.getFullYear(), this.date.getMonth()).getDay();
    return Array(offsetFirstDayOfCurrentMonth).fill(daysLastMonth).map((x, i) => x - i).reverse();
  }

  getListDaysOfMonth(): number[] {
    const daysOfMonth = new Date(this.date.getFullYear(), (this.date.getMonth() + 1), 0).getDate();
    return Array(daysOfMonth).fill(1).map((x, i) => i + 1);
  }

  getDateYearAndMonth(): string {
    return this.date.toLocaleString('en-US', { month: 'long', year: 'numeric' });
  }

  getNameDay(date: Date) {
    return date.toLocaleString('en-US', { weekday: 'short' });
  }

  convertToDateTime(date: Date) {
    return (new Date(date.getTime() -  date.getTimezoneOffset() * 60000).toISOString()).slice(0, -1);
  }

  saveNumber(value: number) {

  }
}
