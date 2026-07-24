import { Component, inject } from '@angular/core';

import { PageHeaderComponent } from '../../shared/ui/page-header/page-header';
import { StatCardComponent } from '../../shared/ui/stat-card/stat-card';
import { FuelChartComponent } from '../../shared/components/fuel-chart/fuel-chart';
import { RecentActivityComponent } from '../../shared/components/recent-activity/recent-activity';

import { DashboardService } from '../../core/services/dashboard';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    PageHeaderComponent,
    StatCardComponent,
    FuelChartComponent,
    RecentActivityComponent
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

  private dashboardService = inject(DashboardService);

  stats = this.dashboardService.getStats();

}