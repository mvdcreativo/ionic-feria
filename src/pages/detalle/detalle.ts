import { ServicesStandsProvider } from './../../providers/services-stands/services-stands';
import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the DetallePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-detalle',
  templateUrl: 'detalle.html',
})
export class DetallePage {
  public stands;
  public data: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public serviceStands: ServicesStandsProvider
  ) {
  }



  ionViewDidLoad() {
    this.detalleStand(this.navParams);
    
  }



    
  detalleStand(idParams){
    let id = idParams.data.id;
    this.stands = this.serviceStands.getStandsId(id);
   console.log(this.stands)
  }
    
}
