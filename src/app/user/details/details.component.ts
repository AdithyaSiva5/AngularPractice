import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Output() sentNoti = new EventEmitter<string>();

  sent() {
    this.sentNoti.emit('KNOCK KNOWCK');
  }
}
