/* eslint-disable @angular-eslint/no-empty-lifecycle-method */
/* eslint-disable @angular-eslint/prefer-inject */
import { Component, OnInit } from '@angular/core';
import { Places } from './places';
import { place } from './place.model'


@Component({
  selector: 'app-places',
  templateUrl: './places.page.html',
  styleUrls: ['./places.page.scss'],
  standalone: false,
})
export class PlacesPage implements OnInit {
  titulo: string = "Lugares del mundo"
  places: place[] = []


  constructor(private placeService: Places) { }


  //Método que se ejecuta al abrir la página por primera vez
  ngOnInit() {
    this.places = this.placeService.getPlaces()
  }

  //Método que se ejecuta cada vez que se abre esta página
  ionViewWillEnter() {
    this.places = this.placeService.getPlaces()
  }
}
