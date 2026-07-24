import { Component } from '@angular/core';
import { StatCardComponent } from '../../shared/ui/stat-card/stat-card';
import { RecentActivityComponent } from '../../shared/components/recent-activity/recent-activity';
import { FuelChartComponent } from '../../shared/components/fuel-chart/fuel-chart';
import { PageHeaderComponent } from '../../shared/ui/page-header/page-header';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StatCardComponent, FuelChartComponent, RecentActivityComponent, PageHeaderComponent],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css'
})
export class DashboardComponent {

}