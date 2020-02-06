import { Injectable } from "@angular/core";
import {
  rawData,
  areaSummary,
  buttonSummary,
  roomSummary,
  siteSummary
} from "./types.service";

import myData from "./data.json";

@Injectable()
export class DataHandlerService {
  rawData: rawData[] = [];
  areaSummary: areaSummary[] = [];
  buttonSummary: buttonSummary[] = [];
  roomSummary: roomSummary[] = [];
  siteSummary: siteSummary[] = [];

  constructor() {
    this.rawData = myData.raw_data;
    this.areaSummary = myData.area_summary;
    this.buttonSummary = myData.button_summary;
    this.roomSummary = myData.room_summary;
    this.siteSummary = myData.site_summary;
  }
}
