import { Component } from '@angular/core';
import { BaseChartDirective } from 'ng2-charts';
import {
  ChartConfiguration,
  ChartOptions
} from 'chart.js';

@Component({
  selector: 'app-fuel-chart',
  standalone: true,
  imports: [BaseChartDirective],
  templateUrl: './fuel-chart.html',
  styleUrl: './fuel-chart.css'
})
export class FuelChartComponent {

  public lineChartData: ChartConfiguration<'line'>['data'] = {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],

    datasets: [
      {
        label: 'Fuel Consumption (L/100km)',

        data: [7.4, 7.1, 6.9, 7.3, 6.8, 6.7],

        fill: true,

        tension: 0.4,

        borderWidth: 3,

        borderColor: '#3B82F6',

        backgroundColor: 'rgba(59,130,246,0.15)',

        pointRadius: 5,

        pointHoverRadius: 7,

        pointBackgroundColor: '#3B82F6'
      }
    ]
  };

  public lineChartOptions: ChartOptions<'line'> = {

    responsive: true,

    maintainAspectRatio: false,

    plugins: {

      legend: {

        labels: {

          color: '#CBD5E1'

        }

      }

    },

    scales: {

      x: {

        ticks: {

          color: '#94A3B8'

        },

        grid: {

          color: '#334155'

        }

      },

      y: {

        beginAtZero: false,

        ticks: {

          color: '#94A3B8'

        },

        grid: {

          color: '#334155'

        }

      }

    }

  };

}