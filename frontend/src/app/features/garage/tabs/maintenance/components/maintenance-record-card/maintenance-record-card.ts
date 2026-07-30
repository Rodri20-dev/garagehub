import { Component, input, output } from '@angular/core';

import { Maintenance } from '../../../../../../core/models/maintenance';

@Component({
  selector: 'app-maintenance-record-card',
  standalone: true,
  imports: [],
  templateUrl: './maintenance-record-card.html',
  styleUrl: './maintenance-record-card.css'
})
export class MaintenanceRecordCardComponent {

  record = input.required<Maintenance>();

  edit = output<Maintenance>();

  delete = output<Maintenance>();

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