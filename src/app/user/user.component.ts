import { Component, Input, Output, EventEmitter } from '@angular/core';
import {
  FormsModule,
  ReactiveFormsModule,
  FormControl,
  FormGroup,
} from '@angular/forms';

@Component({
  selector: 'app-user',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  framework: string = '';

  showframework() {
    alert(this.framework);
  }
  profileForm = new FormGroup({
    name: new FormControl(''),
    email: new FormControl(''),
  });
  submit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
