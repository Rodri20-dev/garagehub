import { Component, input } from '@angular/core';

import { Vehicle } from '../../../../core/models/vehicle.model';
import { VehicleCardComponent } from '../vehicle-card/vehicle-card';

@Component({
  selector: 'app-vehicle-list',
  standalone: true,
  imports: [
    VehicleCardComponent
  ],
  templateUrl: './vehicle-list.html',
  styleUrl: './vehicle-list.css'
})
export class VehicleListComponent {

  vehicles = input.required<Vehicle[]>();

}