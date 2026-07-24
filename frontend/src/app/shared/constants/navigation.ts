import {
  LayoutDashboard,
  Car,
  Fuel,
  Wrench,
  Wallet,
  Settings
} from 'lucide-angular';

export interface NavigationItem {
  label: string;
  route: string;
  icon: any;

  badge?: number;
  disabled?: boolean;
}

export const navigationItems: NavigationItem[] = [
  {
    label: 'Dashboard',
    route: '/dashboard',
    icon: LayoutDashboard
  },
  {
    label: 'Garage',
    route: '/garage',
    icon: Car
  },
  {
    label: 'Fuel',
    route: '/fuel',
    icon: Fuel
  },
  {
    label: 'Maintenance',
    route: '/maintenance',
    icon: Wrench
  },
  {
    label: 'Expenses',
    route: '/expenses',
    icon: Wallet
  },
  {
    label: 'Settings',
    route: '/settings',
    icon: Settings
  }
];