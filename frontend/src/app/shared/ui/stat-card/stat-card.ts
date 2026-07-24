import { Component, input } from '@angular/core';

@Component({
  selector: 'app-stat-card',
  imports: [],
  templateUrl: './stat-card.html',
  styleUrl: './stat-card.css'
})
export class StatCardComponent {

  title = input.required<string>();

  value = input.required<string>();

  icon = input<string>('📊');

  subtitle = input<string>('');

  accentColor = input<string>('bg-blue-500');

}