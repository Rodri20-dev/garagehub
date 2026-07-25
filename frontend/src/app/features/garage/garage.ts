import { Component, inject } from '@angular/core';

import { VehicleHeaderComponent } from './components/vehicle-header/vehicle-header';

import { VehicleService } from '../../core/services/vehicle';
import { VehicleListComponent } from './components/vehicle-list/vehicle-list';

@Component({
  selector: 'app-garage',
  standalone: true,
  imports: [
    VehicleHeaderComponent,
    VehicleListComponent
  ],
  templateUrl: './garage.html',
  styleUrl: './garage.css'
})
export class GarageComponent {

  private vehicleService = inject(VehicleService);

  vehicles = this.vehicleService.getVehicles();

}