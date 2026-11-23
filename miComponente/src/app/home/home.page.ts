import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  nombre: string = "Eduardo"
  usuarios: any = [
    { nombre: 'Fernando', edad: 25 },
    { nombre: 'Pedro', edad: 37 },
    { nombre: 'Francisco', edad: 23 },
    { nombre: 'Carmen', edad: 20 }
  ]
  nombre2: string = "Rodrigo"
  apellidos: string = "Aliende"

  constructor() { }

}
