import { Component, OnInit } from "@angular/core";
import { DataHandlerService } from "src/services/data-handler.service";

@Component({
  selector: 'app-button-summary',
  templateUrl: './button-summary.component.html',
  styleUrls: ['./button-summary.component.css']
})
export class ButtonSummaryComponent implements OnInit {
  constructor(private dataHanlder: DataHandlerService) { }
  totalButtonPressed = 0;
  totalUniqueCalls = 0;
  averageAttendTime = 0;
  averageCallResponse = 0;
  groupedByKeyList: any[] = [];
  buttonDataGroupedByArea: any = {};

  groupBy = (array, key) => {
    return array.reduce((result, currentValue) => {
      (result[currentValue[key]] = result[currentValue[key]] || []).push(
        currentValue
      );
      this.groupedByKeyList.push(currentValue[key]);
      return result;
    }, {});
  };




  ngOnInit() {
    this.buttonDataGroupedByArea = this.groupBy(this.dataHanlder.buttonSummary, 'area');
    this.groupedByKeyList = this.groupedByKeyList.filter((a, b) => this.groupedByKeyList.indexOf(a) === b);

    this.dataHanlder.buttonSummary.map(x => {
      this.totalButtonPressed += x.total_button_presses;
      this.totalUniqueCalls += x.total_unique_calls;
      this.averageAttendTime += x.average_attend_time;
      this.averageCallResponse += x.average_cancel_time;
    });
    this.averageAttendTime = Math.round((this.averageAttendTime / this.dataHanlder.buttonSummary.length) / 60);
    this.averageCallResponse = Math.round((this.averageCallResponse / this.dataHanlder.buttonSummary.length) / 60);
  }
}
