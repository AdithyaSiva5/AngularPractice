import { Component, Input, Output, EventEmitter } from '@angular/core';
import { ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { FormsModule, FormControl, FormGroup } from '@angular/forms';

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
    name: new FormControl('', Validators.required),
    email: new FormControl('', [Validators.required, Validators.email]),
  });
  submit() {
    alert(this.profileForm.value.name + ' | ' + this.profileForm.value.email);
  }
}
