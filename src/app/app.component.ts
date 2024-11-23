import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from "./user/details/details.component";

@Component({
  selector: 'app-root',
  imports: [CommonModule, UserComponent, DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  message: any = 'No message till yet';
  recieve(msg: Event) {
    this.message = msg;
  }
}
