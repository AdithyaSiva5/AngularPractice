import { CommonModule } from '@angular/common';
import {
  Component,
  DoCheck,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-user-form',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-form.component.html',
  styleUrl: './user-form.component.css',
})
export class UserFormComponent implements OnChanges, DoCheck {
  title = 'user-form';
  @Input() theme: string = 'light';
  userForm: FormGroup;
  formStatus: string = '';
  previousFormValue: any;

  constructor(private fb: FormBuilder) {
    this.userForm = this.fb.group({
      username: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('3.Onchanges called');
    if (changes['theme']) {
      console.log(
        `Theme changed from ${changes['theme'].previousValue} to ${changes['theme'].currentValue}`
      );
    }
  }
  ngDoCheck(): void {
    console.log('4. DoCheck called');
    if (this.userForm.value !== this.previousFormValue) {
      this.formStatus = `From updated at ${new Date().toLocaleTimeString()} Values: ${JSON.stringify(
        this.userForm.value,
        null,
        2
      )}`;
      this.previousFormValue = { ...this.userForm.value };
    }
  }

  onSubmit(): void {
    if (this.userForm.valid) {
      console.log('Form submitted:', this.userForm.value);
      this.userForm.reset();
    }
  }
}
