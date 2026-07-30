import { Injectable } from '@angular/core';

import { Expense } from '../models/expenses.model';
import { expenseMock } from '../mocks/expense.mock';

@Injectable({
  providedIn: 'root'
})
export class ExpensesService {

  private expenses: Expense[] = [...expenseMock];

  getExpensesByVehicle(vehicleId: number): Expense[] {

    return this.expenses.filter(
      expense => expense.vehicleId === vehicleId
    );

  }

  addExpense(record: Expense): void {

    this.expenses.unshift(record);

  }

  updateExpense(updatedExpense: Expense): void {

    const index = this.expenses.findIndex(
      expense => expense.id === updatedExpense.id
    );

    if (index !== -1) {

      this.expenses[index] = updatedExpense;

    }

  }

  deleteExpense(id: number): void {

    this.expenses = this.expenses.filter(
      expense => expense.id !== id
    );

  }

  getTotalSpent(vehicleId: number): number {

    return this.getExpensesByVehicle(vehicleId)
      .reduce((sum, expense) => sum + expense.amount, 0);

  }

  getLastExpense(vehicleId: number) {

    return this.getExpensesByVehicle(vehicleId)[0];

  }

  getTotalExpenses(vehicleId: number): number {

    return this.getExpensesByVehicle(vehicleId).length;

  }

}