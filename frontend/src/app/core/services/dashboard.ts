import { Injectable } from '@angular/core';

import {
  dashboardStatsMock,
  recentActivitiesMock
} from '../mocks/dashboard.mock';

@Injectable({
  providedIn: 'root'
})
export class DashboardService {

  getStats() {

    return dashboardStatsMock;

  }

  getRecentActivities() {

    return recentActivitiesMock;

  }

}