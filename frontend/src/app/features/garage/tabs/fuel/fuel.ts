import { Component, inject, signal } from '@angular/core';

import { FuelService } from '../../../../core/services/fuel';

import { FuelSummaryComponent } from './components/fuel-summary/fuel-summary';
import { FuelHistoryComponent } from './components/fuel-history/fuel-history';
import { AddFuelButtonComponent } from './components/add-fuel-button/add-fuel-button';

import { MatDialog } from '@angular/material/dialog';

import { AddFuelDialogComponent } from './dialogs/add-fuel-dialog/add-fuel-dialog';

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
      }

    });

  }

  
}