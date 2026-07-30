import { Component, input, output } from '@angular/core';

import { Expense } from '../../../../../../core/models/expenses.model';

@Component({
  selector: 'app-expense-record-card',
  standalone: true,
  imports: [],
  templateUrl: './expense-record-card.html',
  styleUrl: './expense-record-card.css'
})
export class ExpenseRecordCardComponent {

  record = input.required<Expense>();

  edit = output<Expense>();

  delete = output<Expense>();

  formatDate(date: string): string {

    return new Date(date).toLocaleDateString('pt-PT');

  }

  onEdit(): void {

    this.edit.emit(this.record());

  }

  onDelete(): void {

    this.delete.emit(this.record());

  }

}