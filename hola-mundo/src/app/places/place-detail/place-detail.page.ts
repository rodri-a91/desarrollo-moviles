/* eslint-disable @angular-eslint/prefer-inject */
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Places } from '../placeService';
import { place } from '../place.model'
import { AlertController } from '@ionic/angular/lazy';


@Component({
  selector: 'app-place-detail',
  templateUrl: './place-detail.page.html',
  styleUrls: ['./place-detail.page.scss'],
  standalone: false,
})
export class PlaceDetailPage implements OnInit {

  place: place = { id: '', title: '', imageURL: '', comments: [] };

  constructor(private activatedRouted: ActivatedRoute, private placesService: Places, private router: Router, private alertCtrl: AlertController) { }

  ngOnInit() {
    this.activatedRouted.paramMap.subscribe(paramMap => {
      const recipeId = paramMap.get('placeID')
      this.place = this.placesService.getPlace(recipeId)
      console.log('Objeto: ' + JSON.stringify(this.place))
    })
  }
  async deletePlace() {
    const element = await this.alertCtrl.create(
      {
        header: '¿Seguro qué quieres borrar este lugar?',
        message: '¡Cuidado!',
        buttons: [
          {
            text: 'Cancelar',
            role: 'cancel'
          },
          {
            text: 'Borrar',
            handler: () => {
              this.placesService.deletePlace(this.place.id)
              this.router.navigate(['/places'])
            }
          }
        ]
      }
    )

    await element.present()

  }


}
