import { Component, input, output } from '@angular/core';

import { Fuel } from '../../../../../../core/models/fuel.model';

import { FuelRecordCardComponent } from '../fuel-record-card/fuel-record-card';

@Component({
  selector: 'app-fuel-history',
  standalone: true,
  imports: [
    FuelRecordCardComponent
  ],
  templateUrl: './fuel-history.html',
  styleUrl: './fuel-history.css'
})
export class FuelHistoryComponent {

  records = input.required<Fuel[]>();

  edit = output<Fuel>();

  delete = output<Fuel>();

  onEdit(record: Fuel): void {

    this.edit.emit(record);

  }

  onDelete(record: Fuel): void {

    this.delete.emit(record);

  }
}