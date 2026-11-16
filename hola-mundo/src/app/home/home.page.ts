import { Component, OnInit, signal } from '@angular/core';
import { Photos } from './photos';
import { home } from './home.model'


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage implements OnInit {
  photos = signal<home[]>([])
  title: string = "Listado"


  constructor(private _photosService: Photos) { }

  ngOnInit() {
    this._photosService.getPhotos().subscribe(data => {
      console.log(data)
      this.photos.set(data as home[])
    })
  }
}
