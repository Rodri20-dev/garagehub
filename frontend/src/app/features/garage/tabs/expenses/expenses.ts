import { Component, inject, signal } from '@angular/core';

import { ExpensesService } from '../../../../core/services/expenses';
import { Expense } from '../../../../core/models/expenses.model';

import { ExpensesSummaryComponent } from './components/expenses-summary/expenses-summary';
import { ExpensesHistoryComponent } from './components/expenses-history/expenses-history';
import { AddExpenseButtonComponent } from './components/add-expense-button/add-expense-button';

import { MatDialog } from '@angular/material/dialog';

import { AddExpenseDialogComponent } from './dialogs/add-expense-dialog/add-expense-dialog';
import { ConfirmDeleteDialogComponent } from './dialogs/confirm-delete-dialog/confirm-delete-dialog';

@Component({
  selector: 'app-expenses',
  standalone: true,
  imports: [
    ExpensesSummaryComponent,
    ExpensesHistoryComponent,
    AddExpenseButtonComponent
  ],
  templateUrl: './expenses.html',
  styleUrl: './expenses.css'
})
export class ExpensesComponent {

  private expensesService = inject(ExpensesService);

  private dialog = inject(MatDialog);

  records = signal(
    this.expensesService.getExpensesByVehicle(1)
  );

  openAddExpenseDialog(): void {

  const dialogRef = this.dialog.open(
    AddExpenseDialogComponent,
    {
      width: '700px',
      disableClose: true
    }
  );

  dialogRef.afterClosed().subscribe(result => {

    if (result) {

      this.records.set(
        this.expensesService.getExpensesByVehicle(1)
      );

    }

  });

}

editExpense(record: Expense): void {

  const dialogRef = this.dialog.open(
    AddExpenseDialogComponent,
    {
      width: '700px',
      disableClose: true,
      data: record
    }
  );

  dialogRef.afterClosed().subscribe(result => {

    if (result) {

      this.records.set(
        this.expensesService.getExpensesByVehicle(1)
      );

    }

  });

}

deleteExpense(record: Expense): void {

  const dialogRef = this.dialog.open(
    ConfirmDeleteDialogComponent,
    {
      width: '400px'
    }
  );

  dialogRef.afterClosed().subscribe(result => {

    if (!result) {

      return;

    }

    this.expensesService.deleteExpense(record.id);

    this.records.set(
      this.expensesService.getExpensesByVehicle(1)
    );

  });

}

}