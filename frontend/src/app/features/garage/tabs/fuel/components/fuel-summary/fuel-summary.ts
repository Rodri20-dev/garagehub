import { Component, input } from '@angular/core';

import { Fuel } from '../../../../../../core/models/fuel.model';
import { FuelSummaryCardComponent } from '../fuel-summary-card/fuel-summary-card';

@Component({
  selector: 'app-fuel-summary',
  standalone: true,
  imports: [
    FuelSummaryCardComponent,
  ],
  templateUrl: './fuel-summary.html',
  styleUrl: './fuel-summary.css'
})
export class FuelSummaryComponent {

  records = input.required<Fuel[]>();

  get totalSpent(): number {

    return this.records()
      .reduce((sum, fuel) => sum + fuel.totalCost, 0);

  }

  get averagePrice(): number {

    const fuels = this.records();

    if (!fuels.length) {

      return 0;

    }

    return fuels.reduce(
      (sum, fuel) => sum + fuel.pricePerLiter,
      0
    ) / fuels.length;

  }

  get totalLiters(): number {

    return this.records()
      .reduce((sum, fuel) => sum + fuel.liters, 0);

  }

  get lastRefuel(): string {

    const last = this.records()[0];

    return last
      ? new Date(last.date).toLocaleDateString('pt-PT')
      : '-';

  }

}