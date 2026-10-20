import { Service } from '@angular/core';
import { place } from './place.model'

@Service()
export class Places {

    private places: place[] = [
        {
            id: '1',
            title: 'Torre Eiffel',
            imageURL: 'https://images.unsplash.com/photo-1511739001486-6bfe10ce785f?auto=format&fit=crop&w=800&q=80',
            comments: ['Maravillosa torre, preciosa', 'una belleza, impresionante altura']
        },
        {
            id: '2',
            title: 'Estatua de la libertad',
            imageURL: 'https://images.unsplash.com/photo-1543731068-7e0f5beff43a?auto=format&fit=crop&w=800&q=80',
            comments: ['Increíbles vistas desde la bahía', 'Las vistas desde arriba son una pasada']
        },
        {
            id: '3',
            title: 'Gran Muralla China',
            imageURL: 'https://images.unsplash.com/photo-1508804185872-d7badad00f7d?auto=format&fit=crop&w=800&q=80',
            comments: ['Una obra arquitectónica impresionante', 'Mucha caminata pero las vistas valen la pena']
        },
        {
            id: '4',
            title: 'Coliseo Romano',
            imageURL: 'https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=800&q=80',
            comments: ['Sientes la historia en cada rincón', 'Imprescindible hacer la visita guiada']
        },
        {
            id: '5',
            title: 'Taj Mahal',
            imageURL: 'https://images.unsplash.com/photo-1564507592333-c60657eea523?auto=format&fit=crop&w=800&q=80',
            comments: ['Un monumento al amor espectacular', 'El mármol al amanecer se ve increíble']
        },
        {
            id: '6',
            title: 'Machu Picchu',
            imageURL: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?auto=format&fit=crop&w=800&q=80',
            comments: ['Mágico e impresionante en medio de las montañas', 'Una energía y paisajes sin igual']
        }
    ]

    constructor() {

    }

    getPlaces() {
        return [...this.places]
    }

    getPlace(placeID: string | null) {
        return {
            ...this.places.find(p => { return p.id === placeID })
        }

    }

    addPlace(title: string, imageURL: string) {
        this.places.push({
            title,
            imageURL,
            comments: [],
            id: (this.places.length + 1).toString()
        })
    }

    deletePlace(placeId: string) {
        this.places = this.places.filter(p => { return p.id != placeId})
    }
}
