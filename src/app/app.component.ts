import { CommonModule, NgOptimizedImage } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { TaskformComponent } from './taskform/taskform.component';

@Component({
  selector: 'app-root',
  imports: [CommonModule, TaskformComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  title: string = 'test';
  constructor() {}
}
