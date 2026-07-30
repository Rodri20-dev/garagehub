import { Maintenance } from '../models/maintenance';

export const maintenanceMock: Maintenance[] = [

  {
    id: 1,
    vehicleId: 1,
    date: '2026-07-20',
    mileage: 204373,
    type: 'Oil Change',
    description: 'Engine oil + oil filter',
    workshop: 'Honda',
    cost: 75,
    notes: 'Motul 8100 X-clean'
  },

  {
    id: 2,
    vehicleId: 1,
    date: '2026-05-14',
    mileage: 202500,
    type: 'Brake Service',
    description: 'Front brake pads',
    workshop: 'Norauto',
    cost: 110,
    notes: ''
  },

  {
    id: 3,
    vehicleId: 1,
    date: '2026-02-02',
    mileage: 198400,
    type: 'Timing Belt',
    description: 'Timing belt kit + water pump',
    workshop: 'Honda',
    cost: 420,
    notes: ''
  }

];