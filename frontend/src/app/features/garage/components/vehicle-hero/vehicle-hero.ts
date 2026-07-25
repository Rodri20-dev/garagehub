import { Component, input } from '@angular/core';

import { Vehicle } from '../../../../core/models/vehicle.model';

@Component({
  selector: 'app-vehicle-hero',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-hero.html',
  styleUrl: './vehicle-hero.css'
})
export class VehicleHeroComponent {

  vehicle = input.required<Vehicle>();

}