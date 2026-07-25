import { Component, input } from '@angular/core';

import { Vehicle } from '../../../../core/models/vehicle.model';
import { VehicleInfoCardComponent } from '../../components/vehicle-info-card/vehicle-info-card';

@Component({
  selector: 'app-overview',
  standalone: true,
  imports: [
    VehicleInfoCardComponent
  ],
  templateUrl: './overview.html',
  styleUrl: './overview.css'
})
export class OverviewComponent {

  vehicle = input.required<Vehicle>();

}