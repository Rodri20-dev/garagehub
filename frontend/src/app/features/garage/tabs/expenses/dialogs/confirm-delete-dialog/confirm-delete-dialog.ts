import { Component, inject } from '@angular/core';

import { MatDialogModule } from '@angular/material/dialog';
import { MatDialogRef } from '@angular/material/dialog';


@Component({
  selector: 'app-confirm-delete-dialog',
  standalone: true,
  imports: [
    MatDialogModule
  ],
  templateUrl: './confirm-delete-dialog.html',
  styleUrl: './confirm-delete-dialog.css',
})
export class ConfirmDeleteDialogComponent {

  private dialogRef = inject(
    MatDialogRef<ConfirmDeleteDialogComponent>
  );

  confirm(): void {

    this.dialogRef.close(true);

  }

  cancel(): void {

    this.dialogRef.close(false);

  }
}