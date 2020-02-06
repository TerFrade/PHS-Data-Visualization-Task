export interface rawData {
  call_timestamp: string;
  button_id: string;
  response_status: string;
  button_location: string;
  room: string;
  area: string;
  scanner_id: string;
  call_amount: number;
  attend_time: number;
  cancel_time: number;
  scanner_location: string;
  site: string;
  site_type: string;
  button_department_type: string;
  button_department_subtype: string;
}
export interface buttonSummary {
  site: string;
  area: string;
  button_location: string;
  button_department_type: string;
  button_department_subtype: string;
  average_attend_time: number;
  average_cancel_time: number;
  total_button_presses: number;
  total_unique_calls: number;
}
export interface roomSummary {
  site: string;
  area: string;
  button_department_type: string;
  button_department_subtype: string;
  average_attend_time: number;
  average_cancel_time: number;
  total_button_presses: number;
  total_unique_calls: number;
}
export interface areaSummary {
  site: string;
  area: string;
  button_department_type: string;
  button_department_subtype: string;
  average_attend_time: number;
  average_cancel_time: number;
  total_button_presses: number;
  total_unique_calls: number;
}
export interface siteSummary {
  site: string;
  button_department_type: string;
  button_department_subtype: string;
  average_attend_time: number;
  average_cancel_time: number;
  total_button_presses: number;
  total_unique_calls: number;
}
