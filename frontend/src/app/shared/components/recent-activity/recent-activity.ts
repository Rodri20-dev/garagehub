import { Component } from '@angular/core';

@Component({
  selector: 'app-recent-activity',
  standalone: true,
  templateUrl: './recent-activity.html',
  styleUrl: './recent-activity.css'
})
export class RecentActivityComponent {

  activities = [

    {
      icon: '🚗',
      title: 'Honda Civic EJ8 added',
      date: 'Today'
    },

    {
      icon: '⛽',
      title: 'Fuel record created',
      date: 'Yesterday'
    },

    {
      icon: '🔧',
      title: 'Oil change completed',
      date: '2 days ago'
    }

  ];

}