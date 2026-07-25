import { Component, input } from '@angular/core';

@Component({
  selector: 'app-vehicle-info-card',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-info-card.html',
  styleUrl: './vehicle-info-card.css'
})
export class VehicleInfoCardComponent {

  label = input.required<string>();

  value = input.required<string>();

}