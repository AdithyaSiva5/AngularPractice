import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-taskform',
  imports: [],
  templateUrl: './taskform.component.html',
  styleUrl: './taskform.component.css',
})
export class TaskformComponent {
  title: string;
  status: string = 'Not Initialized';

  constructor() {
    console.log('1. Constructor Called');
    this.title = 'Learning Angular Hook';
  }

  ngOnInit(): void {
    console.log('2. ngOnInit Called');

    setTimeout(() => {
      this.status = 'Initialized';
    }, 1000);
  }
  updateStatus(): void {
    this.status = ' Updated  At ' + new Date().toLocaleTimeString();
  }
}
