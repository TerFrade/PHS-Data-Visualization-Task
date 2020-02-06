import { Component, OnInit } from "@angular/core";
import { DataHandlerService } from "src/services/data-handler.service";

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

  ngOnInit() {
    this.dataHanlder.rawData.map(x => {
      this.totalCallAmount += x.call_amount;
      this.averageCancelTime += x.cancel_time;
    });
    this.averageCancelTime = Math.round((this.averageCancelTime / this.dataHanlder.rawData.length) / 60);
    this.totalUniqueButtons = this.dataHanlder.buttonSummary.length;
    this.totalUniqueRooms = this.dataHanlder.roomSummary.length;
  }
}
