import { AfterViewInit, Component, Input, OnChanges, ViewChild } from '@angular/core';
declare var google: any;

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnChanges{
  @ViewChild('pieChart') pieChart: any;
  @Input() data: any;

  constructor() { }

  onInit() {
    console.log(this.data);
    
  }

  drawChart = () => {

    const data = google.visualization.arrayToDataTable(this.data);
    
      const options = {
        title: 'My Daily Activities',
        legend: {position: 'top'}
      };
    
      const chart = new google.visualization.PieChart(this.pieChart.nativeElement);
    
      chart.draw(data, options);
    }
  
    ngOnChanges() {
      console.log(this.data);
      
      google.charts.load('current', { 'packages': ['corechart'] });
      google.charts.setOnLoadCallback(this.drawChart);
    }
}
