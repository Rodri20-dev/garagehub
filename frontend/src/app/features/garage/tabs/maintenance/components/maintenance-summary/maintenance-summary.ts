import { Component, input } from '@angular/core';

import { Maintenance } from '../../../../../../core/models/maintenance';

@Component({
  selector: 'app-maintenance-summary',
  standalone: true,
  imports: [],
  templateUrl: './maintenance-summary.html',
  styleUrl: './maintenance-summary.css'
})
export class MaintenanceSummaryComponent {

  records = input.required<Maintenance[]>();

  get totalSpent(): number {

    return this.records()
      .reduce((sum, record) => sum + record.cost, 0);

  }

  get totalRecords(): number {

    return this.records().length;

  }

  get lastMaintenance(): string {

    const last = this.records()[0];

    return last
      ? new Date(last.date).toLocaleDateString('pt-PT')
      : '-';

  }

}