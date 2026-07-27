import { Component, input } from '@angular/core';

@Component({
  selector: 'app-fuel-summary-card',
  standalone: true,
  imports: [],
  templateUrl: './fuel-summary-card.html',
  styleUrl: './fuel-summary-card.css'
})
export class FuelSummaryCardComponent {

  title = input.required<string>();

  value = input.required<string>();

}