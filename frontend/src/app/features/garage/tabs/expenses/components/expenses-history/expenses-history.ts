import { Component, input, output } from '@angular/core';

import { Expense } from '../../../../../../core/models/expenses.model';

import { ExpenseRecordCardComponent } from '../expense-record-card/expense-record-card';

@Component({
  selector: 'app-expenses-history',
  standalone: true,
  imports: [
    ExpenseRecordCardComponent
  ],
  templateUrl: './expenses-history.html',
  styleUrl: './expenses-history.css'
})
export class ExpensesHistoryComponent {

  records = input.required<Expense[]>();

  edit = output<Expense>();

  delete = output<Expense>();

  onEdit(record: Expense): void {

    this.edit.emit(record);

  }

  onDelete(record: Expense): void {

    this.delete.emit(record);

  }

}