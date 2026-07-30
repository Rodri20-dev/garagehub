import { Component, inject } from '@angular/core';

import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import {
  MatDialogModule,
  MatDialogRef,
  MAT_DIALOG_DATA
} from '@angular/material/dialog';

import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';

import { MaintenanceService } from '../../../../../../core/services/maintenance';

import { Maintenance } from '../../../../../../core/models/maintenance';

@Component({
  selector: 'app-add-maintenance-dialog',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatDialogModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule
  ],
  templateUrl: './add-maintenance-dialog.html',
  styleUrl: './add-maintenance-dialog.css'
})
export class AddMaintenanceDialogComponent {

  private fb = inject(FormBuilder);

  private maintenanceService = inject(MaintenanceService);

  private dialogRef =
    inject(MatDialogRef<AddMaintenanceDialogComponent>);

  readonly data =
    inject<Maintenance | null>(MAT_DIALOG_DATA);

  maintenanceForm = this.fb.group({

    date: ['', Validators.required],

    mileage: [0, Validators.required],

    type: ['', Validators.required],

    description: ['', Validators.required],

    workshop: ['', Validators.required],

    cost: [0, Validators.required],

    notes: ['']

  });

  constructor() {

    if (!this.data) {

      return;

    }

    this.maintenanceForm.patchValue({

      date: this.data.date,

      mileage: this.data.mileage,

      type: this.data.type,

      description: this.data.description,

      workshop: this.data.workshop,

      cost: this.data.cost,

      notes: this.data.notes

    });

  }

  save(): void {

    if (this.maintenanceForm.invalid) {

      return;

    }

    const value = this.maintenanceForm.getRawValue();

    const maintenance: Maintenance = {

      id: this.data?.id ?? Date.now(),

      vehicleId: 1,

      date: value.date!,

      mileage: value.mileage!,

      type: value.type!,

      description: value.description!,

      workshop: value.workshop!,

      cost: value.cost!,

      notes: value.notes ?? ''

    };

    if (this.data) {

      this.maintenanceService.updateMaintenance(
        maintenance
      );

    } else {

      this.maintenanceService.addMaintenance(
        maintenance
      );

    }

    this.dialogRef.close(true);

  }

  cancel(): void {

    this.dialogRef.close();

  }

}