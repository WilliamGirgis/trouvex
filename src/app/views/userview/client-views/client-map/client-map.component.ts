import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MapComponent,Marker, MarkerCard } from 'ng-leaflet-universal';


@Component({
  selector: 'app-client-map',
  templateUrl: './client-map.component.html',
  styleUrls: ['./client-map.component.scss']
})
export class ClientMapComponent implements OnInit,AfterViewInit {

  @ViewChild(MapComponent) mapComponent: MapComponent;

  card:MarkerCard = {
    image: { url:  'https://picsum.photos/200/200', },
    title: { text:  'The place', customStyleClass:  'awesome-title' },
    subtitle: { text:  'The best place' },
    content: { text: '<p> This is the content that will be used in the <b> card </b> </p>' },
    address: { text:  'Neverland, NM 88203' },
    callToActions: [
      {
        text:  'View details',
        link:  'https://myawesomeapp.domain/Location-1',
        customStyleClass:  'my-details-button'
      },
      {
        text:  'Directions',
        backgroundColor:  '#007319',
        textColor:  '#fff',
        link:  `https://www.google.com/maps/@-81.1288,-81.4579,18.13z`,
        icon: 'fas fa-directions'
      }
    ],
    customStyleClass: 'cards'
  }

  markers: Marker[] = [];


  constructor() {
for(let i =0; i < 10;i++) {
  this.markers.push({ id: `${i}`,
    icon: `https://picsum.photos/200/${i % 3}00`,
    location: {
      latitude: Math.random() * (40 - 30) + 30,
      longitude:  Math.random() * (40 - 30) + 30,},card:this.card,})
      this.markers[i].cardActivated = true
}

   }

  ngOnInit(): void {
  }


  ngAfterViewInit(): void {

    this.mapComponent.updateMarkers(this.markers);

  }





}


