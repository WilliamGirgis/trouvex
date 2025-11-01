import { AfterViewInit, Component, EventEmitter, Input, OnInit, Output, Renderer2, ViewChild } from '@angular/core';
import * as L from 'leaflet';
import { MapComponent, Marker, MarkerCard } from 'ng-leaflet-universal';
import { map } from 'rxjs/operators';
import { LostObjectService } from '../../../../services/lost-object.service';
import { LostObject } from '../../../../shared/lostObjet';
import { Point } from 'leaflet';


@Component({
  selector: 'app-client-map',
  templateUrl: './client-map.component.html',
  styleUrls: ['./client-map.component.scss'],
  standalone: false,

})
export class ClientMapComponent implements OnInit, AfterViewInit {

  @Output() markerClickEvents:EventEmitter<L.LeafletMouseEvent> = new EventEmitter()


  @ViewChild(MapComponent) mapComponent?: MapComponent;

  hey(data: any) {
    console.log("hey :" + data)
  }
  lostObjectList: LostObject[] = []
  constructor(public lostObjectService: LostObjectService, private renderer: Renderer2) { }


  getCurrentLocation(): Promise<{ latitude: number; longitude: number }> {

    return new Promise((resolve, reject) => {
      if (!navigator.geolocation) {
        reject(new Error("Geolocation is not supported by your browser."));
      } else {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            const { latitude, longitude } = position.coords;


            resolve({ latitude, longitude });
          },
          (error) => {
            reject(new Error(`Geolocation error: ${error.message}`));
          }
        );
      }
    });
  }

  ngOnInit(): void {


  }

  markers:L.Marker[] = []
  ngAfterViewInit(): void {
    let index = 0
    this.mapComponent?.map!.on('zoom', () => {
      this.updateMarkerSize();

    });
    this.mapComponent?.map.zoomControl.setPosition('bottomleft')


    this.updateMarkerSize(); // Initial call
    this.lostObjectService.objectLostList.pipe(map((newLostObjectList) => {

      if (newLostObjectList.length > 0) {
         index = this.lostObjectList.length
        this.lostObjectList = newLostObjectList
        // this.layerIds.push(index)

        L.marker([this.lostObjectList[index].latitude!, this.lostObjectList[index].longitude!], {attribution:`${index}`,

          icon: L.divIcon({iconSize: new Point(45,45),
            className: 'custom-marker', iconUrl: `${this.lostObjectList[index].imgList[0]}`,
            html: `
              <div  style="transition: 350ms ease;padding:3px;height:100%;width:100%;border-radius : 50% ;background-color:${this.lostObjectList[index].type == 'found' ? '#5ab30a' : '#b30a3e'}">
                  <img  style="border-radius : 50% ;height:100%; width:100%"  src="${this.lostObjectList[index].imgList[0] ? this.lostObjectList[index].imgList[0] : this.lostObjectList[index].type == 'found' ? '../../../assets/images/question-mark-svgrepo-com.svg' : '../../../assets/images/exclamation-svgrepo-com.svg'}" class="miniature-image" />
        </div>
                  `,
          }),
        }).bindPopup(() => {
          return `

             <div>
                          <img height="125px" width="125px" src="${this.lostObjectList[index].imgList[0] ? this.lostObjectList[index].imgList[0] : this.lostObjectList[index].type == 'found' ? '../../../assets/images/question-mark-svgrepo-com.svg' : '../../../assets/images/exclamation-svgrepo-com.svg'}"  class="miniature-image" />

                <h4>${this.lostObjectList[index].type == 'lost' ? 'Perdu' : 'Trouvé'} le ${this.lostObjectList[index].date} ${this.lostObjectList[index].hour ? 'à ' + this.lostObjectList[index].hour : ''} </h4>
                <p>${this.lostObjectList[index].description ? 'Description : ' + this.lostObjectList[index].description : ''}</p>
                <button id="dynamicButton${index}">J'en suis le/la propriétaire !</button>
     </div>
            `;
        }).addTo(this.mapComponent?.map!)

        this.mapComponent?.map.invalidateSize() // Force le même comportement qu'avec le F11 (force leaflet à recalculer la dimension de la map)
        this.mapComponent?.map.flyTo([this.lostObjectList[index].latitude!, this.lostObjectList[index].longitude!], 17, { animate: true, duration: 2 })

      }



    })).subscribe()

    this.getCurrentLocation()
    .then((location) => {

      this.mapComponent?.map.invalidateSize() // Force le même comportement qu'avec le F11 (force leaflet à recalculer la dimension de la map)
      this.mapComponent?.map.setView([location.latitude!, location.longitude!], 14)
    })
    .catch((error) => {
    });
  }
  updateMarkerSize() {

      this.mapComponent?.map.eachLayer((layer) => {
        const zoomLevel = this.mapComponent?.map!.getZoom();
const scaleFactor = zoomLevel ?  Math.max(10, 70 * Math.pow(0.8, 18 - zoomLevel))  : 1; // Adjust scaling
const newSize =  scaleFactor;
        if (layer instanceof L.Marker) {  // Ensure it's a marker
          const index =  Number(layer.getAttribution!())
            const newIcon = L.divIcon({attribution:'',
              iconSize: new Point(newSize, newSize),
              className: 'custom-marker',
              html: `
                <div style="transition: 350ms ease;padding:2px;height:100%;width:100%;border-radius : 50%; background-color:${
                  this.lostObjectList[index!].type == 'found' ? '#73fa61' : '#de4e7a'
                }">
                  <img style="display:${zoomLevel! <= 11 ? 'none' : 'initial'};border-radius : 50%; height:100%; width:100%"
                        src="${this.lostObjectList[index!].imgList[0] || (this.lostObjectList[index].type == 'found'
                          ? '../../../assets/images/question-mark-svgrepo-com.svg'
                          : '../../../assets/images/exclamation-svgrepo-com.svg')}"
                        class="miniature-image" />
                </div>
              `,
            });
            layer.setIcon(newIcon);
            layer.bindPopup(() =>{          return `

             <div>
                          <img height="125px" width="125px" src="${this.lostObjectList[index].imgList[0] ? this.lostObjectList[index].imgList[0] : this.lostObjectList[index].type == 'found' ? '../../../assets/images/question-mark-svgrepo-com.svg' : '../../../assets/images/exclamation-svgrepo-com.svg'}"  class="miniature-image" />

                <h4>${this.lostObjectList[index].type == 'lost' ? 'Perdu' : 'Trouvé'} le ${this.lostObjectList[index].date} ${this.lostObjectList[index].hour ? 'à ' + this.lostObjectList[index].hour : ''} </h4>
                <p>${this.lostObjectList[index].description ? 'Description : ' + this.lostObjectList[index].description : ''}</p>
                <button id="dynamicButton${index}">J'en suis le/la propriétaire !</button>
     </div>
            `})

            if(!layer.hasEventListeners('popupopen')) {
              layer.on('popupopen', () => {
                const button = document.getElementById(`dynamicButton${index}`);
                  this.renderer.listen(button, 'click', () => {
                    this.hey(index);
                  });

              }).on('click',(event) =>{
                this.markerClickEvents.emit(event)
              })
            }
          }


      });

  }
}


