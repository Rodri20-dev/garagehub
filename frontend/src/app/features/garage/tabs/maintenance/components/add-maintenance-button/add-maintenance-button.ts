import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-maintenance-button',
  imports: [],
  templateUrl: './add-maintenance-button.html',
  styleUrl: './add-maintenance-button.css',
})
export class AddMaintenanceButtonComponent {

  clicked = output<void>();

  onClick(): void {

    this.clicked.emit();

  }
}
