import { Component, inject, signal } from '@angular/core';

import { FuelService } from '../../../../core/services/fuel';

import { FuelSummaryComponent } from './components/fuel-summary/fuel-summary';
import { FuelHistoryComponent } from './components/fuel-history/fuel-history';
import { AddFuelButtonComponent } from './components/add-fuel-button/add-fuel-button';

import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';

import { AddFuelDialogComponent } from './dialogs/add-fuel-dialog/add-fuel-dialog';
import { Fuel } from '../../../../core/models/fuel.model';
import { ConfirmDeleteDialogComponent } from './dialogs/confirm-delete-dialog/confirm-delete-dialog';

@Component({
  selector: 'app-fuel',
  standalone: true,
  imports: [
    FuelSummaryComponent,
    FuelHistoryComponent,
    AddFuelButtonComponent
  ],
  templateUrl: './fuel.html',
  styleUrl: './fuel.css'
})
export class FuelComponent {

  private fuelService = inject(FuelService);

  private dialog = inject(MatDialog);

  private snackBar = inject(MatSnackBar);

  fuels = signal(
    this.fuelService.getFuelByVehicle(1)
  );

  openAddFuelDialog(): void {

    const dialogRef = this.dialog.open(AddFuelDialogComponent, {

      width: '700px',

      disableClose: true

    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        this.fuels.set(
          this.fuelService.getFuelByVehicle(1)
        );

        this.snackBar.open(
          'Fuel added successfully',
          'Close',
          {
            duration: 3000
          }
        );

      }

    });

  }

  editFuel(record: Fuel): void {

    const dialogRef = this.dialog.open(AddFuelDialogComponent, {
      width: '700px',
      disableClose: true,
      data: record
    });

    dialogRef.afterClosed().subscribe(result => {

      if (result) {

        this.fuels.set(
          this.fuelService.getFuelByVehicle(1)
        );

      }

      this.snackBar.open(
        'Fuel updated successfully',
        'Close',
        {
          duration: 3000
        }
      );

    });

  }

  deleteFuel(record: Fuel): void {

  const dialogRef = this.dialog.open(
    ConfirmDeleteDialogComponent,
    {
      width: '400px'
    }
  );

  dialogRef.afterClosed().subscribe(result => {

    if (!result) {

      return;

    }

    this.fuelService.deleteFuel(record.id);

    this.fuels.set(
      this.fuelService.getFuelByVehicle(1)
    );

    this.snackBar.open(
      'Fuel deleted successfully',
      'Close',
      {
        duration: 3000
      }
    );

  });

}
}