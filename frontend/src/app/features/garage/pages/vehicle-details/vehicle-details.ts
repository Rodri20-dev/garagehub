import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VehicleService } from '../../../../core/services/vehicle';
import { Vehicle } from '../../../../core/models/vehicle.model';
import { VehicleInfoCardComponent } from '../../components/vehicle-info-card/vehicle-info-card';
import { VehicleHeroComponent } from '../../components/vehicle-hero/vehicle-hero';

@Component({
  selector: 'app-vehicle-details',
  standalone: true,
  imports: [
    VehicleInfoCardComponent,
    VehicleHeroComponent
  ],
  templateUrl: './vehicle-details.html',
  styleUrl: './vehicle-details.css'
})
export class VehicleDetailsComponent {

  private route = inject(ActivatedRoute);

  private vehicleService = inject(VehicleService);

  vehicle?: Vehicle;

  constructor() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.vehicle = this.vehicleService.getVehicleById(id);

  }

}