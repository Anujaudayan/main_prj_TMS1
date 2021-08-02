import { Component, OnInit } from '@angular/core';
import { CalendarView } from 'angular-calendar';
import { CalendarEvent } from 'calendar-utils';
import { TrainerService } from '../trainer.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-calender',
  templateUrl: './calender.component.html',
  styleUrls: ['./calender.component.css']
})
export class CalenderComponent implements OnInit {
  viewDate: Date = new Date();
  trainer={ name:'',
  email:'',
  phone:'',
  address:'',
  qualification:'',
  skillset:'',
  company:'',
  designation:'',
  ictakcourses:'',
  photo:'',
  ID:'',
  employment:'',
  approved:'',
  startdate:'',
  enddate:'',
  time:'',
  coursename:'',
  courseid:'',
  batchid:'',
  meetingvenue:''}
  view: CalendarView = CalendarView.Month;
  CalendarView = CalendarView;
  startdate:any;
  enddate:any;
  events:CalendarEvent[]=[
    {start:new Date(),
      end:new Date(),
      title:''}];
  
  constructor(private trainerObj : TrainerService, private router:Router,public datepipe: DatePipe) { }
  

  ngOnInit(): void {
    
    let cuser=localStorage.getItem('currentUser');
    this.trainerObj.calendar_access(cuser)
    .subscribe((data)=>{ this.trainer=JSON.parse(JSON.stringify(data));
     this.startdate= this.datepipe.transform(this.trainer.startdate,'yyyy-MM-dd','+0530');
      this.enddate=this.datepipe.transform(this.trainer.enddate,'yyyy/MM/dd','+0530')
      this.events=[
        {
          start:new Date(this.startdate),
          end:new Date(this.enddate),
          title:this.trainer.courseid
      }
    ]
      })
  }
  
  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    
    Swal.fire({
      icon:'info',
      title:this.trainer.coursename,
      html:`<p> Time:${this.trainer.time} <br>Batchid:${this.trainer.batchid}<br>Venue:${this.trainer.meetingvenue}</p>`
    })
    //this.openAppointmentList(date)
  }
 
}
