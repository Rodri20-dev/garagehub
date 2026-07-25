import { Component, input } from '@angular/core';
import { Router } from '@angular/router';
import { inject } from '@angular/core';
import { Vehicle } from '../../../../core/models/vehicle.model';

@Component({
  selector: 'app-vehicle-card',
  standalone: true,
  imports: [],
  templateUrl: './vehicle-card.html',
  styleUrl: './vehicle-card.css'
})
export class VehicleCardComponent {
  
  private router = inject(Router);

  goToDetails() {

    this.router.navigate(['/garage', this.vehicle().id]);

  }
  vehicle = input.required<Vehicle>();

}