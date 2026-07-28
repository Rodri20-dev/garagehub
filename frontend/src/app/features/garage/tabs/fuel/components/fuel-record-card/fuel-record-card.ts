import { Component, input, output } from '@angular/core';

import { Fuel } from '../../../../../../core/models/fuel.model';

@Component({
  selector: 'app-fuel-record-card',
  standalone: true,
  imports: [],
  templateUrl: './fuel-record-card.html',
  styleUrl: './fuel-record-card.css'
})
export class FuelRecordCardComponent {

  record = input.required<Fuel>();

  edit = output<Fuel>();

  delete = output<Fuel>();

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