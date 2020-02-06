import { Component, OnInit } from "@angular/core";
import { DataHandlerService } from "src/services/data-handler.service";
import { ChartType, ChartDataSets } from 'chart.js';
import { Label, Color } from 'ng2-charts';

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  constructor(private dataHanlder: DataHandlerService) { }
  totalCallAmount = 0;
  averageCancelTime = 0;
  totalUniqueButtons = 0;
  totalUniqueRooms = 0;
  chartOptions = {
    title: {
      text: "Activity of Buttons being Pressed throughout the Month.",
      display: true
    },
    scaleShowVerticalLines: false,
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      yAxes: [{
        scaleLabel: { display: true, labelString: 'Amount of Buttons being Pressed.' }
      }],
      xAxes: [{
        scaleLabel: { display: true, labelString: 'Day of the Week.' }
      }]
    }
  };

  public lineChartColors: Color[] = [
    {
      backgroundColor: 'rgba(20,170,206,0.8)'
    },
    {
      backgroundColor: 'rgba(255,206,86,0.8)'
    },
    {
      backgroundColor: 'rgba(220,53,69,0.8)'
    },
    {
      backgroundColor: 'rgba(40,167,69,0.8)'
    },
  ];

  chartType: ChartType = 'bar';
  chartLegend = true;
  chartLabels: Label[] = [];
  chartData: ChartDataSets[] = [];

  ngOnInit() {
    this.dataHanlder.rawData.map(x => {
      this.totalCallAmount += x.call_amount;
      this.averageCancelTime += x.cancel_time;
    });
    this.averageCancelTime = Math.round((this.averageCancelTime / this.dataHanlder.rawData.length) / 60);
    this.totalUniqueButtons = this.dataHanlder.buttonSummary.length;
    this.totalUniqueRooms = this.dataHanlder.roomSummary.length;
    this.loadChart();
    this.loadDummyWeeks();
  }

  loadChart() {
    this.chartLabels = ["Sun", "Mon", "Tue", "Wen", "Thu", "Fri", "Sat"]
    let itemDayData = [0, 0, 0, 0, 0, 0, 0];
    this.dataHanlder.rawData.map(item => {
      let dt = new Date(item.call_timestamp).getDay();
      itemDayData[dt] += item.call_amount;
    });
    this.chartData.push({
      data: itemDayData, label: "Week 1"
    })
  }

  loadDummyWeeks() {
    for (let i = 2; i < 5; i++) {
      this.chartData.push({
        data: [
          Math.round(Math.random() * 300),
          Math.round(Math.random() * 300),
          Math.round(Math.random() * 300),
          Math.round(Math.random() * 300),
          Math.round(Math.random() * 300),
          Math.round(Math.random() * 300),
          Math.round(Math.random() * 300)],
        label: `Dummy - Week ${i}`
      })
    }
  }
}
