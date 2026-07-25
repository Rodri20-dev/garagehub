import { Component, input } from '@angular/core';

import { Vehicle } from '../../../../core/models/vehicle.model';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-card.html',
  styleUrl: './vehicle-card.css'
})
export class VehicleCardComponent {

  vehicle = input.required<Vehicle>();

}