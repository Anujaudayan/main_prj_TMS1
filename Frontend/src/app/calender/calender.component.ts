import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { CalendarEvent } from 'calendar-utils';
import Swal from 'sweetalert2';
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
      title: 'FSD_01 for batch 02',

    }
  ]
  
  
  constructor() { }

  ngOnInit(): void {
    
  }
  
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    
    Swal.fire({
      icon:'info',
      title:'Event notification',
      html:`<p> Time:11:00 AM <br>Venue:Iris conference hall</p>`
    })
    //this.openAppointmentList(date)
  }
 
}
