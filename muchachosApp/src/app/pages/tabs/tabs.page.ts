import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { CalendarService } from 'src/app/services/calendar';

@Component({
  selector: 'app-tabs',
  templateUrl: './tabs.page.html',
  styleUrls: ['./tabs.page.scss'],
  standalone: false
})
export class TabsPage implements OnInit {

  @Output() calendarClicked = new EventEmitter<void>();
  

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {

  }

}
