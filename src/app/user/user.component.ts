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

@Component({
  selector: 'app-user',
  imports: [FormsModule, ReactiveFormsModule],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent implements OnInit {
  userInfo: any;
  carno: number = 2;
  car: string | undefined;
  userService;
  carService = inject(UserService);

  constructor(private injector: Injector) {
    // Manually retrieve the service using the Injector
    this.userService = this.injector.get(UserService);
  }

  ngOnInit(): void {
    this.userInfo = this.carService.getCars();
    this.car = this.userService.getCar(this.carno);
  }
}
