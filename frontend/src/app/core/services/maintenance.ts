import { Injectable } from '@angular/core';

import { Maintenance } from '../models/maintenance';
import { maintenanceMock } from '../mocks/maintenance.mock';

@Injectable({
  providedIn: 'root'
})
export class MaintenanceService {

  private records: Maintenance[] = [...maintenanceMock];

  getMaintenanceByVehicle(vehicleId: number): Maintenance[] {

    return this.records.filter(
      record => record.vehicleId === vehicleId
    );

  }

  addMaintenance(record: Maintenance): void {

    this.records.unshift(record);

  }

  updateMaintenance(updatedRecord: Maintenance): void {

    const index = this.records.findIndex(
      record => record.id === updatedRecord.id
    );

    if (index !== -1) {

      this.records[index] = updatedRecord;

    }

  }

  deleteMaintenance(id: number): void {

    this.records = this.records.filter(
      record => record.id !== id
    );

  }

}