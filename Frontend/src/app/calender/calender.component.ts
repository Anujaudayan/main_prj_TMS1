import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { CalendarEvent } from 'calendar-utils';

@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  viewDate: Date = new Date();
  
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  events: CalendarEvent[] = [
    {
      start: new Date('2021-07-30'),
      title: 'An event with no end date',

    }
  ]
  
  
  constructor() { }

  ngOnInit(): void {
    
  }
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    alert('Event name:'+events[0].title+',Time:11:00 AM,Venue:Iris conference hall')
    //this.openAppointmentList(date)
  }
 
}
