import { Component,  } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

import { SharedModule } from 'src/app/shared/shared-module';
import { CommonModule } from '@angular/common';
import { CalendarService } from 'src/app/services/calendar';


@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.page.html',
  styleUrls: ['./calendar.page.scss'],
    standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class CalendarPage {

  constructor(private calendarService: CalendarService) {}

  public openCalendar() {
    this.calendarService.emitCalendarClick();
  }

}
