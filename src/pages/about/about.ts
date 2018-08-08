import { ServicesStandsProvider } from './../../providers/services-stands/services-stands';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { HomePage } from '../home/home';
import { ContactPage } from './../contact/contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

public stands;

  constructor(
    public navCtrl: NavController,
    public params: NavParams,
    private serviceStands: ServicesStandsProvider
  ) {
  }

ngOnInit() {
  this.listStands();
}

listStands(){
  this.stands = this.serviceStands.stands
}


}
