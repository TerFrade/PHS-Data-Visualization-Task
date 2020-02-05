import { MainMenuComponent } from "./main-menu/main-menu.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { ButtonSummaryComponent } from "./views/button-summary/button-summary.component";
import { RoomSummaryComponent } from "./views/room-summary/room-summary.component";
import { AreaSummaryComponent } from "./views/area-summary/area-summary.component";
import { SiteSummaryComponent } from "./views/site-summary/site-summary.component";

export const AppRoutes = [
  {
    path: "phs-administration",
    component: MainMenuComponent,
    children: [
      { path: "dashboard", component: DashboardComponent },
      { path: "button-summary", component: ButtonSummaryComponent },
      { path: "room-summary", component: RoomSummaryComponent },
      { path: "area-summary", component: AreaSummaryComponent },
      { path: "site-summary", component: SiteSummaryComponent }
    ]
  },
  { path: "", redirectTo: "/phs-administration/dashboard", pathMatch: "full" }
];
