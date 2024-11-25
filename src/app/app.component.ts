import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { UserFormComponent } from './user-form/user-form.component';
import { ContentcontainerComponent } from './contentcontainer/contentcontainer.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, ContentcontainerComponent],
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
