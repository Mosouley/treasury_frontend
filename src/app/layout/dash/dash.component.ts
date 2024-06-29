import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';
import { MaterialModule } from 'src/app/material/material.module';
import { AnalyticsComponent } from 'src/app/report/analytics/analytics.component';
import { PnlCcyComponent } from 'src/app/report/pnl-ccy/pnl-ccy.component';
import { PnlSummaryComponent } from 'src/app/report/pnl-summary/pnl-summary.component';
import { PositionCcyComponent } from 'src/app/report/position-ccy/position-ccy.component';
import { RisksMetricsComponent } from 'src/app/report/risks-metrics/risks-metrics.component';
import { BannerService } from 'src/app/shared/services/banner.service';
import { NavbarComponent } from '../navbar/navbar.component';
import { SettingsComponent } from 'src/app/treasuryapp/config/settings/settings.component';
import { SettingsPanelComponent } from '../settings-panel/settings-panel.component';
import { BannerComponent } from './banner.component';
import { RouterModule } from '@angular/router';
import { SideNavComponent } from '../sidenav/side-nav-left/side-nav/side-nav.component';
import { SideNavClosedComponent } from '../sidenav/side-nav-left/side-nav-closed/side-nav-closed.component';


@Component({
  selector: 'app-dash',
  standalone: true,
  imports: [
    CommonModule,
    MaterialModule,
    SideNavComponent,
    SideNavClosedComponent,
    NavbarComponent,
    BannerComponent,
    SettingsComponent,
    SettingsPanelComponent,
    RouterModule

  ],
  templateUrl: './dash.component.html',
  styleUrls: ['./dash.component.css'],

})
export class DashComponent implements OnInit {


  numCards = Array.from(Array(10).keys());

  isSidebarOpen = true;

  isSettingsPanelOpen = false;
  // isSearchBoxOpen = false;
  isSidebarReduced = false;

  @Output () toggleSideNav: EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor(private bannerService: BannerService) {
   }
  ngOnInit(){}

  toggleBanner() {
    this.bannerService.toggleBanner();
  }

  toggleSidebarMenu($event: any) {
    this.isSidebarOpen = $event;
  }

  toggleSidebarReduce($event: any) {
    this.isSidebarReduced = $event;
  }
  toggleSettingsMenu($event: any) {
    this.isSettingsPanelOpen = $event;
  }
  callPnLSummary() {
    this.bannerService.setDynamicComponent(PnlSummaryComponent);
  }
  callPositionCcy() {
    this.bannerService.setDynamicComponent(PositionCcyComponent);
  }
  callPnLCcy() {
    this.bannerService.setDynamicComponent(PnlCcyComponent);
  }
  callRisksMetrics() {
    this.bannerService.setDynamicComponent(RisksMetricsComponent);
  }
  callAnalytics() {
    this.bannerService.setDynamicComponent(AnalyticsComponent);
  }

  sidebarWidthClass(): string {
    if (this.isSidebarOpen) {
      return 'transform transition-all duration-200 w-60 ease-out';
    } else {
      return '-translate-x-full transition-all duration-300 ease-out w-0';
    }
  }

  sidebarIconClass(): string {
    return this.isSidebarReduced ? 'w-12 transform place-items-center justify-center transition-all duration-300 ease-in bg-sellar-primary' : 'transform ease-out duration-300';
  }

  sidebarTransitionClass(): string {
    if (this.isSidebarOpen && this.isSidebarReduced) {
      return 'transform transition-all duration-300 sm:w-12 ease-in';
    } else {
      return 'transform-none';
    }
  }

}
