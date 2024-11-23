import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-details',
  imports: [],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css',
})
export class DetailsComponent {
  @Output() sentEvent = new EventEmitter();

  sentMessage() {
    this.sentEvent.emit('KNOCK KNOCK');
  }
}
