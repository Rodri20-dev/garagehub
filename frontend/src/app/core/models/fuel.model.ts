export interface Fuel {

  id: number;

  vehicleId: number;

  date: string;

  mileage: number;

  liters: number;

  pricePerLiter: number;

  totalCost: number;

  fuelType: string;

  gasStation: string;

  fullTank: boolean;

  notes?: string;

}