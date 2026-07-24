import { DashboardStats } from '../models/dashboard.model';
import { Activity } from '../models/activity.model';

export const dashboardStatsMock: DashboardStats = {

    totalVehicles: 1,

    totalFuelRecords: 24,

    pendingMaintenance: 2,

    totalExpenses: 1260

};

export const recentActivitiesMock: Activity[] = [

    {

        id: 1,

        icon: '🚗',

        title: 'Honda Civic EJ8 added',

        date: 'Today'

    },

    {

        id: 2,

        icon: '⛽',

        title: 'Fuel record created',

        date: 'Yesterday'

    },

    {

        id: 3,

        icon: '🔧',

        title: 'Oil change completed',

        date: '2 days ago'

    }

];