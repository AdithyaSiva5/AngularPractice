import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, UserFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'test';
  currentTheme: string = 'light';
  toggleTheme(): void {
    this.currentTheme = this.currentTheme == 'light' ? 'dark' : 'light';
  }
}
