import {
  Component,
  Input,
  Output,
  EventEmitter,
  Injectable,
  OnInit,
  inject,
  Injector,
} from '@angular/core';
import { ReactiveFormsModule, Validator, Validators } from '@angular/forms';
import { FormsModule, FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/UserService';
import { DecimalPipe, DatePipe, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-user',
  imports: [
    FormsModule,
    ReactiveFormsModule,
    DecimalPipe,
    DatePipe,
    CurrencyPipe,
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {
  num = 103.1234;
  birthday = new Date(2023, 3, 2);
  cost = 4560.34;
}
