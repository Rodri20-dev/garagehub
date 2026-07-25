import { Component, inject, signal} from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { VehicleService } from '../../../../core/services/vehicle';
import { Vehicle } from '../../../../core/models/vehicle.model';
import { VehicleHeroComponent } from '../../components/vehicle-hero/vehicle-hero';
import { VehicleTabsComponent } from '../../components/vehicle-tabs/vehicle-tabs';
import { OverviewComponent } from '../../tabs/overview/overview';
import { FuelComponent } from '../../tabs/fuel/fuel';
import { MaintenanceComponent } from '../../tabs/maintenance/maintenance';
import { ExpensesComponent } from '../../tabs/expenses/expenses';
import { ModificationsComponent } from '../../tabs/modifications/modifications';
import { GalleryComponent } from '../../tabs/gallery/gallery';

@Component({
  selector: 'app-vehicle-details',
  standalone: true,
  imports: [
    VehicleHeroComponent,
    VehicleTabsComponent,
    OverviewComponent,
    FuelComponent,
    MaintenanceComponent,
    ExpensesComponent,
    ModificationsComponent,
    GalleryComponent
  ],
  templateUrl: './vehicle-details.html',
  styleUrl: './vehicle-details.css'
})
export class VehicleDetailsComponent {

  private route = inject(ActivatedRoute);

  private vehicleService = inject(VehicleService);

  vehicle?: Vehicle;

  selectedTab = signal('Overview');

  constructor() {

    const id = Number(this.route.snapshot.paramMap.get('id'));

    this.vehicle = this.vehicleService.getVehicleById(id);

  }

}

