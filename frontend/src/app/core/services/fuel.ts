import { Injectable } from '@angular/core';

import { Fuel } from '../models/fuel.model';
import { fuelMock } from '../mocks/fuel.mock';

@Injectable({
  providedIn: 'root'
})
export class FuelService {

  private fuels: Fuel[] = [...fuelMock];

  getFuelByVehicle(vehicleId: number): Fuel[] {

    return this.fuels.filter(fuel => fuel.vehicleId === vehicleId);

  }

  addFuel(record: Fuel): void {

    this.fuels.unshift(record);

  }

    getTotalSpent(vehicleId: number): number {

    return this.getFuelByVehicle(vehicleId)
        .reduce((total, fuel) => total + fuel.totalCost, 0);

    }

    getAveragePrice(vehicleId: number): number {

    const fuels = this.getFuelByVehicle(vehicleId);

    if (!fuels.length) {

        return 0;

    }

    const total = fuels.reduce(
        (sum, fuel) => sum + fuel.pricePerLiter,
        0
    );

    return total / fuels.length;

    }

    getTotalLiters(vehicleId: number): number {

    return this.getFuelByVehicle(vehicleId)
        .reduce((sum, fuel) => sum + fuel.liters, 0);

    }

    getLastRefuel(vehicleId: number) {

    return this.getFuelByVehicle(vehicleId)[0];

    }

}