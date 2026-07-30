import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-expense-button',
  standalone: true,
  imports: [],
  templateUrl: './add-expense-button.html',
  styleUrl: './add-expense-button.css'
})
export class AddExpenseButtonComponent {

  clicked = output<void>();

  onClick(): void {
    this.clicked.emit();
  }

}