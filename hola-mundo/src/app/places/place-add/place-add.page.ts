import { Component, OnInit } from '@angular/core';
import { IonInput } from '@ionic/angular/lazy';
import { Places } from '../placeService';
import { Router } from '@angular/router';


@Component({
  selector: 'app-place-add',
  templateUrl: './place-add.page.html',
  styleUrls: ['./place-add.page.scss'],
  standalone: false,
})
export class PlaceAddPage implements OnInit {
  titulo: string = "Añadir lugar"
  // eslint-disable-next-line @angular-eslint/prefer-inject
  constructor(private placeService: Places, private router: Router) { }

  // eslint-disable-next-line @angular-eslint/no-empty-lifecycle-method
  ngOnInit() {
  }

  saveNewPlace(title: IonInput, image: IonInput) {
    alert('guardar nuevo lugar: titulo -> ' + title.value + ' imagen-> ' + image.value)

    this.placeService.addPlace(String(title.value), String(image.value))
    this.router.navigate(['/places'])

  }

}
