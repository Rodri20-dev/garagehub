import { Component, input, output } from '@angular/core';

import { Maintenance } from '../../../../../../core/models/maintenance';

import { MaintenanceRecordCardComponent } from '../maintenance-record-card/maintenance-record-card';

@Component({
  selector: 'app-maintenance-history',
  standalone: true,
  imports: [
    MaintenanceRecordCardComponent
  ],
  templateUrl: './maintenance-history.html',
  styleUrl: './maintenance-history.css'
})
export class MaintenanceHistoryComponent {

  records = input.required<Maintenance[]>();

  edit = output<Maintenance>();

  delete = output<Maintenance>();

  onEdit(record: Maintenance): void {

    this.edit.emit(record);

  }

  onDelete(record: Maintenance): void {

    this.delete.emit(record);

  }

}