import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root', // This makes the service available app-wide
})
export class UserService {
  cars = ['Sunflower GT', 'Flexus Sport', 'Sprout Mach One'];
  getCars(): string[] {
    return this.cars;
  }

  getCar(id: number) {
    return this.cars[id];
  }
}
