import { Component } from '@angular/core';
import { ChartcomponentComponent } from '../chartcomponent/chartcomponent.component';

@Component({
  selector: 'app-dashboard',
  imports: [ChartcomponentComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
})
export class DashboardComponent {
  viewInits: number = 0;
  incrementViewInits() {
    this.viewInits++;
  }
}
