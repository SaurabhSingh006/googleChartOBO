import { AfterViewInit, Component, ViewChild } from '@angular/core';
import { DailyBasisService } from './daily-basis.service';
import { HourBasisService } from './hour-basis.service';
import { MonthlyBasisService } from './monthly-basis.service';
import { ElementRef } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  dailyData= []; 
  header = ['Date', 'Occurrences']

  constructor( private daily: DailyBasisService,
    private hour: HourBasisService, 
    private monthly: MonthlyBasisService ) {}

  ngOnInit() {
    //GoogleCharts.load(this.drawCharts);
    
  }


  btnHandlerDaily() {
    //let data = ['Date', 'Occurrences'];
    this.daily.search().subscribe((response: any) => {
      console.log(response);
      var result = response.rows.map(e => {
        //console.log(e);
        return [e.dateTime, e.occurrences ]
      });
 
      this.dailyData = [this.header, ...result];
    });

  }

  btnHandlerHour() {
    this.hour.search().subscribe((res: any) => {
      //console.log(res);
      var result = res.rows.map(e => {
        //console.log(e);
        return [e.dateTime, e.occurrences ]
      });
 
      this.dailyData = [this.header, ...result];
    });
  }

  btnHandlerMonthly() {
    this.monthly.search().subscribe((res: any) => {
      var result = res.rows.map(e => {
        //console.log(e);
        return [e.dateTime, e.occurrences ]
      });

      this.dailyData = [this.header, ...result]
    });
  }
}
