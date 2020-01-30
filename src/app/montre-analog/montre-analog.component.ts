import { Component, OnInit } from '@angular/core';
import { MontreAnalogiqueServiceService } from '../service/montre-analogique-service.service';

@Component({
  selector: 'app-montre-analog',
  templateUrl: './montre-analog.component.html',
  styleUrls: ['./montre-analog.component.css']
})
export class MontreAnalogComponent implements OnInit {
  public ctime;
  second : HTMLElement ;
  minute : HTMLElement ;
  hour : HTMLElement;

  constructor(private TimerService:MontreAnalogiqueServiceService) { }

  ngOnInit() {
    this.second=document.getElementById('second-hand');
    this.minute=document.getElementById('min-hand');
    this.hour  =document.getElementById('hour-hand');
    setInterval(()=>this.setDate(),1000);
  }

  setDate(){
    //current time
    this.ctime= this.TimerService.getCurrentTimer();

    // seconds
    let seconds = this.ctime.getSeconds();

    //degre of seconds
    let secDeg =((seconds/60)*360)+90;
    this.second.style.transform='rotate('+secDeg+'deg)';

    // minutes
    let mins = this.ctime.getMinutes();

    //degre of minutes
    let minDeg =((mins/60) * 360) + ((seconds/60)*6) + 90;

    this.minute.style.transform = 'rotate('+minDeg+'deg)';

    //hours
    let hour = this.ctime.getHours();

    //degre of hour
    let hourDeg =((hour/12)*360) + ((mins/60)*3) + 90;
    this.hour.style.transform = 'rotate('+hourDeg+'deg)';


}
}
