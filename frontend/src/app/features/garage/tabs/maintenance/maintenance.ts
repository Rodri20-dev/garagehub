import { Component, inject, signal } from '@angular/core';

import { MaintenanceService } from '../../../../core/services/maintenance';
import { Maintenance } from '../../../../core/models/maintenance';

import { MaintenanceSummaryComponent } from './components/maintenance-summary/maintenance-summary';
import { MaintenanceHistoryComponent } from './components/maintenance-history/maintenance-history';
import { AddMaintenanceButtonComponent } from './components/add-maintenance-button/add-maintenance-button';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDeleteDialogComponent } from './dialogs/confirm-delete-dialog/confirm-delete-dialog';
import { AddMaintenanceDialogComponent } from './dialogs/add-maintenance-dialog/add-maintenance-dialog';

@Component({
  selector: 'app-maintenance',
  standalone: true,
  imports: [
    MaintenanceSummaryComponent,
    MaintenanceHistoryComponent,
    AddMaintenanceButtonComponent
  ],
  templateUrl: './maintenance.html',
  styleUrl: './maintenance.css'
})
export class MaintenanceComponent {

  private maintenanceService = inject(MaintenanceService);

  private dialog = inject(MatDialog);

  records = signal(
    this.maintenanceService.getMaintenanceByVehicle(1)
  );


  openAddMaintenanceDialog(): void {

    const dialogRef = this.dialog.open(
      AddMaintenanceDialogComponent,
      {

        width: '700px',

        disableClose: true

      }
    );

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        this.records.set(
          this.maintenanceService.getMaintenanceByVehicle(1)
        );

      }

    });

  }



  editMaintenance(record: Maintenance): void {

    const dialogRef = this.dialog.open(
      AddMaintenanceDialogComponent,
      {

        width: '700px',

        disableClose: true,

        data: record

      }
    );

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        this.records.set(
          this.maintenanceService.getMaintenanceByVehicle(1)
        );

      }

    });

  }

  deleteMaintenance(record: Maintenance): void {

    const dialogRef = this.dialog.open(ConfirmDeleteDialogComponent, {
      width: '400px'
    });

    dialogRef.afterClosed().subscribe(result => {

      if (!result) {
        return;
      }

      this.maintenanceService.deleteMaintenance(record.id);

      this.records.set(
        this.maintenanceService.getMaintenanceByVehicle(1)
      );

    });
  }
}