import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FuelService } from '../../../../../../core/services/fuel';
import { Fuel } from '../../../../../../core/models/fuel.model';

@Component({
  selector: 'app-add-fuel-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatSelectModule,
    MatCheckboxModule
  ],
  templateUrl: './add-fuel-dialog.html',
  styleUrl: './add-fuel-dialog.css'
})
export class AddFuelDialogComponent {

  private fb = inject(FormBuilder);

  private fuelService = inject(FuelService);

  private dialogRef = inject(MatDialogRef<AddFuelDialogComponent>);
  
  readonly data = inject<Fuel | null>(MAT_DIALOG_DATA);

  fuelForm = this.fb.group({

    date: ['', Validators.required],

    fuelType: ['Gasoline 98', Validators.required],

    gasStation: ['', Validators.required],

    pricePerLiter: [0, Validators.required],

    liters: [0, Validators.required],

    mileage: [0, Validators.required],

    fullTank: [true],

    notes: ['']

  });

  constructor() {

    if (!this.data) {

      return;

    }

    this.fuelForm.patchValue({

      date: this.data.date,

      fuelType: this.data.fuelType,

      gasStation: this.data.gasStation,

      pricePerLiter: this.data.pricePerLiter,

      liters: this.data.liters,

      mileage: this.data.mileage,

      fullTank: this.data.fullTank,

      notes: this.data.notes

    });

  }

  save(): void {

    if (this.fuelForm.invalid) {

      return;

    }

    const formValue = this.fuelForm.getRawValue();

    const fuel: Fuel = {

      id: this.data?.id ?? Date.now(),

      vehicleId: 1,

      date: formValue.date!,

      fuelType: formValue.fuelType!,

      gasStation: formValue.gasStation!,

      pricePerLiter: formValue.pricePerLiter!,

      liters: formValue.liters!,

      totalCost:
        formValue.pricePerLiter! *
        formValue.liters!,

      mileage: formValue.mileage!,

      fullTank: formValue.fullTank!,

      notes: formValue.notes ?? ''

    };

    if (this.data) {

      this.fuelService.updateFuel(fuel);

    } else {

      this.fuelService.addFuel(fuel);

    }

    this.dialogRef.close(true);

  }

  cancel(): void {

    this.dialogRef.close();

  }

}