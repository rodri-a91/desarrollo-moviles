/* eslint-disable @angular-eslint/prefer-inject */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Places } from '../places';
import { place } from '../place.model'


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: false,
})
export class PlaceDetailPage implements OnInit {

  place: place = { id: '', title: '', imageURL: '', comments: [] };

  constructor(private activatedRouted: ActivatedRoute, private placesService: Places, private router: Router) { }

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeID')
      this.place = this.placesService.getPlace(recipeId)
      console.log('Objeto: ' + JSON.stringify(this.place))
    })
  }
  deletePlace() {
    this.placesService.deletePlace(this.place.id)
    this.router.navigate(['/places'])
  }

}
