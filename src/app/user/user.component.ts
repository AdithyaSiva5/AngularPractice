import {
  Component,
  Input,
  Output,
  EventEmitter,
  Injectable,
  OnInit,
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

  constructor(private userService: UserService) {}

  ngOnInit(): void {
    this.userInfo = this.userService.getCars();
    this.car = this.userService.getCar(this.carno);
  }
}
