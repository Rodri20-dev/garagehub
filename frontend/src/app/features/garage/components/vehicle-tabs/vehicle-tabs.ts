import { Component, input, output } from '@angular/core';
import { House, Fuel, Wrench, Wallet, Hammer, Image } from 'lucide-angular';
import { LucideAngularModule } from 'lucide-angular';

@Component({
  selector: 'app-vehicle-tabs',
  standalone: true,
  imports: [
    LucideAngularModule
  ],
  templateUrl: './vehicle-tabs.html',
  styleUrl: './vehicle-tabs.css'
})
export class VehicleTabsComponent {

  tabs = [
    {
      label: 'Overview',
      icon: House
    },
    {
      label: 'Fuel',
      icon: Fuel
    },
    {
      label: 'Maintenance',
      icon: Wrench
    },
    {
      label: 'Expenses',
      icon: Wallet
    },
    {
      label: 'Modifications',
      icon: Hammer
    },
    {
      label: 'Gallery',
      icon: Image
    }
  ];

  activeTab = input.required<string>();

  tabChanged = output<string>();

  selectTab(tab: string) {

    this.tabChanged.emit(tab);

  }

}