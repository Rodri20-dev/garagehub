import { Expense } from '../models/expenses.model';

export const expenseMock: Expense[] = [

  {
    id: 1,
    vehicleId: 1,
    date: '2026-07-01',
    category: 'Insurance',
    description: 'Annual insurance',
    shop: 'Fidelidade',
    amount: 320,
    notes: ''
  },

  {
    id: 2,
    vehicleId: 1,
    date: '2026-07-10',
    category: 'Parking',
    description: 'City parking',
    shop: 'Emel',
    amount: 8,
    notes: ''
  }

];