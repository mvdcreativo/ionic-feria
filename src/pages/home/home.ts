import { Component } from '@angular/core';
import { NavController, PopoverController, Alert } from 'ionic-angular';
import { GoogleMaps, GoogleMap, GoogleMapsEvent, Marker, GoogleMapOptions, MarkerOptions, LatLng } from '@ionic-native/google-maps';
import { Geolocation } from '@ionic-native/geolocation';
import { ServicesStandsProvider } from './../../providers/services-stands/services-stands';
import { DetallePage } from '../detalle/detalle';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  map: GoogleMap;
  marcadores= [] ;
  marker: Marker;
  resp= [];


  constructor(
    public navCtrl: NavController,
    private standsService : ServicesStandsProvider,
  ) {  

  }


  ionViewDidLoad() {
    
    this.loadMap();
  }



  loadMap() {
    const coordenadasPlaza = {lat:-34.907700,lng:-56.208127};

    let options: GoogleMapOptions = {
        camera: {
        zoom:19,
        target: coordenadasPlaza
      },
      controls: {
        compass: true,
        myLocation: true,
        myLocationButton: true,
        mapToolbar: true,
      }
    };
    // Create a map after the view is ready and the native platform is ready.
    this.map = GoogleMaps.create('map_canvas', options);
    console.log('mapa creado')


    
    ////MARCADORES
    this.standsService.stands.forEach(marker=>{
      this.addMarker(marker);
    });

  }


  addMarker(options){
    let markerOptions: MarkerOptions = {
      position: new LatLng(options.coordenadas.lat, options.coordenadas.lng),
      title: options.nombre,
      animation: 'DROP',
      icon: {
            url: options.icono,
            size: {
              width: 32,
              height: 34
            }
      }
    };

    let marker = this.map.addMarkerSync(markerOptions);
    marker.addEventListener(GoogleMapsEvent.MARKER_CLICK).subscribe(
      (resp: Marker) => {
        let tresp = JSON.stringify(resp);
        // console.log(tresp)
        if(tresp){
         this.pushPage(options.id);
        }
      }
    )
  }



  
public pushPage(id){
  // console.log('pushPage ok')
  this.navCtrl.push(DetallePage, {'id':id});
 }






}
