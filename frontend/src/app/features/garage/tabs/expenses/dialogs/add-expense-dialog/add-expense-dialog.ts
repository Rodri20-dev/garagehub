import { Component, inject } from '@angular/core';

import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { ExpensesService } from '../../../../../../core/services/expenses';

import { Expense } from '../../../../../../core/models/expenses.model';

@Component({
  selector: 'app-add-expense-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './add-expense-dialog.html',
  styleUrl: './add-expense-dialog.css'
})
export class AddExpenseDialogComponent {

  private fb = inject(FormBuilder);

  private expensesService = inject(ExpensesService);

  private dialogRef =
    inject(MatDialogRef<AddExpenseDialogComponent>);

  readonly data =
    inject<Expense | null>(MAT_DIALOG_DATA);

  expenseForm = this.fb.group({

    date: ['', Validators.required],

    category: ['', Validators.required],

    description: ['', Validators.required],

    shop: ['', Validators.required],

    amount: [0, Validators.required],

    notes: ['']

  });

  constructor() {

    if (!this.data) {

      return;

    }

    this.expenseForm.patchValue({

      date: this.data.date,

      category: this.data.category,

      description: this.data.description,

      shop: this.data.shop,

      amount: this.data.amount,

      notes: this.data.notes

    });

  }

  save(): void {

    if (this.expenseForm.invalid) {

      return;

    }

    const value = this.expenseForm.getRawValue();

    const expense: Expense = {

      id: this.data?.id ?? Date.now(),

      vehicleId: 1,

      date: value.date!,

      category: value.category!,

      description: value.description!,

      shop: value.shop!,

      amount: value.amount!,

      notes: value.notes ?? ''

    };

    if (this.data) {

      this.expensesService.updateExpense(expense);

    } else {

      this.expensesService.addExpense(expense);

    }

    this.dialogRef.close(true);

  }

  cancel(): void {

    this.dialogRef.close();

  }

}