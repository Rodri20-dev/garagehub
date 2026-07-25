import { Injectable } from '@angular/core';

import { vehiclesMock } from '../mocks/vehicle.mock';
import { Vehicle } from '../models/vehicle.model';

@Injectable({
  providedIn: 'root'
})
export class VehicleService {

  getVehicles(): Vehicle[] {

    return vehiclesMock;

  }

  getVehicle(id: number): Vehicle | undefined {

    return vehiclesMock.find(v => v.id === id);

  }

  getVehicleById(id: number): Vehicle | undefined {

    return vehiclesMock.find(vehicle => vehicle.id === id);

  }

}