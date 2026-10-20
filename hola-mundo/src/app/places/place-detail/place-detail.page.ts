import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Places } from '../places';
import { place } from '../place.model'


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: false,
})
export class PlaceDetailPage implements OnInit {
  private place?: place 

  constructor(private activatedRouted: ActivatedRoute, private placesService: Places) { }

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeID')
      this.place=this.placesService.getPlace(recipeId)
      console.log(recipeId)
    })
  }

}
