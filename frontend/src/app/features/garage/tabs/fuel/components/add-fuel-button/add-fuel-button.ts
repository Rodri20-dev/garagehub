import { Component, output } from '@angular/core';

@Component({
  selector: 'app-add-fuel-button',
  standalone: true,
  imports: [],
  templateUrl: './add-fuel-button.html',
  styleUrl: './add-fuel-button.css'
})
export class AddFuelButtonComponent {

  clicked = output<void>();

}