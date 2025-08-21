// calendar.service.ts
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

export interface CalendarEvent {
  date: string; 
  title: string;
}

@Injectable({
  providedIn: 'root'
})
export class CalendarService {
  private calendarClickSource = new Subject<void>();
  calendarClick$ = this.calendarClickSource.asObservable();

  emitCalendarClick() {
    this.calendarClickSource.next();
  }
}
