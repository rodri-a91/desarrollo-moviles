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


  ngOnInit() {
    this.places = this.placeService.getPlaces()
  }

}
