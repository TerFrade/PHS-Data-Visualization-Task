import { Component, OnInit } from '@angular/core';
import { DataHandlerService } from "src/services/data-handler.service";

@Component({
  selector: 'app-button-summary',
  templateUrl: './button-summary.component.html',
  styleUrls: ['./button-summary.component.css']
})
export class ButtonSummaryComponent implements OnInit {

  constructor(private dataHanlder: DataHandlerService) { }

  ngOnInit() {
    console.log(this.dataHanlder.buttonSummary)
  }

}
