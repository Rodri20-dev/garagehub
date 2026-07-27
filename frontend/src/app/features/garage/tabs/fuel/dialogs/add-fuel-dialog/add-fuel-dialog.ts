import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FuelService } from '../../../../../../core/services/fuel';

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

  save(): void {

    if (this.fuelForm.invalid) {

      return;

    }

    const form = this.fuelForm.getRawValue();

    this.fuelService.addFuel({

      id: Date.now(),

      vehicleId: 1,

      date: form.date!,

      fuelType: form.fuelType!,

      gasStation: form.gasStation!,

      pricePerLiter: form.pricePerLiter!,

      liters: form.liters!,

      totalCost: form.pricePerLiter! * form.liters!,

      mileage: form.mileage!,

      fullTank: form.fullTank!,

      notes: form.notes ?? ''

    });

    this.dialogRef.close(true);

  }

  cancel(): void {

    this.dialogRef.close();

  }

}