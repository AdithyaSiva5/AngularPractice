import { Component, Input, Output, EventEmitter } from '@angular/core';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-user',
  imports: [DetailsComponent],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  message = '';

  recievemsg(msg: string) {
    this.message = msg;
  }
}
