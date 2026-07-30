import { Component, computed, input } from '@angular/core';

import { Expense } from '../../../../../../core/models/expenses.model';

@Component({
  selector: 'app-expenses-summary',
  standalone: true,
  imports: [],
  templateUrl: './expenses-summary.html',
  styleUrl: './expenses-summary.css'
})
export class ExpensesSummaryComponent {

  records = input.required<Expense[]>();

  totalSpent = computed(() =>
    this.records().reduce((sum, expense) => sum + expense.amount, 0)
  );

  totalExpenses = computed(() =>
    this.records().length
  );

  lastExpense = computed(() =>
    this.records().length > 0
      ? this.records()[0]
      : undefined
  );

}