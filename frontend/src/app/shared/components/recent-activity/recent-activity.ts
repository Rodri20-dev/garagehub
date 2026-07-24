import { Component, inject } from '@angular/core';

import { DashboardService } from '../../../core/services/dashboard';

@Component({
  selector: 'app-recent-activity',
  standalone: true,
  templateUrl: './recent-activity.html',
  styleUrl: './recent-activity.css'
})
export class RecentActivityComponent {

  private dashboardService = inject(DashboardService);

  activities = this.dashboardService.getRecentActivities();

}