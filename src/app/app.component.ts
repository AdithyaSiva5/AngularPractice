import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './user/user.component';
import { DetailsComponent } from './user/details/details.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, UserComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  isLoading: boolean = true; // Initially, content is loading
  contentLoaded: boolean = false; // Tracks if the content is ready

  ngOnInit() {
    // Simulate a loading delay of 2 seconds (can be more)
    setTimeout(() => {
      this.isLoading = false; // Set loading to false after 2 seconds
      this.contentLoaded = true; // Content is now loaded
    }, 2000);
  }
}
