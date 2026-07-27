import { Fuel } from '../models/fuel.model';

export const fuelMock: Fuel[] = [

  {
    id: 1,
    vehicleId: 1,
    date: '2026-07-18',
    mileage: 204373,
    liters: 42.31,
    pricePerLiter: 1.879,
    totalCost: 79.50,
    fuelType: 'Gasoline 98',
    gasStation: 'Repsol',
    fullTank: true,
    notes: 'Weekend trip'
  },

  {
    id: 2,
    vehicleId: 1,
    date: '2026-07-02',
    mileage: 203811,
    liters: 39.74,
    pricePerLiter: 1.849,
    totalCost: 73.49,
    fuelType: 'Gasoline 98',
    gasStation: 'Galp',
    fullTank: true
  },

  {
    id: 3,
    vehicleId: 1,
    date: '2026-06-14',
    mileage: 203255,
    liters: 40.16,
    pricePerLiter: 1.865,
    totalCost: 74.92,
    fuelType: 'Gasoline 98',
    gasStation: 'BP',
    fullTank: true
  }

];