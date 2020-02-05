//Default Imports
import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { RouterModule } from "@angular/router";
import { AppComponent } from "./app.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AppRoutes } from "./app.routes";

//Views
import { MainMenuComponent } from "./main-menu/main-menu.component";
import { DashboardComponent } from "./views/dashboard/dashboard.component";
import { ButtonSummaryComponent } from "./views/button-summary/button-summary.component";
import { RoomSummaryComponent } from "./views/room-summary/room-summary.component";
import { AreaSummaryComponent } from "./views/area-summary/area-summary.component";
import { SiteSummaryComponent } from "./views/site-summary/site-summary.component";

@NgModule({
  declarations: [
    AppComponent,
    MainMenuComponent,
    DashboardComponent,
    ButtonSummaryComponent,
    RoomSummaryComponent,
    AreaSummaryComponent,
    SiteSummaryComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(AppRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
