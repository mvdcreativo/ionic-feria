import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage: any;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    
    this.initializeApp();
  }


  initializeApp() {
    this.platform.ready().then(() => {
      this.rootPage = TabsPage;

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      // let status bar overlay webview
      this.statusBar.overlaysWebView(true);
      //this.statusBar.styleBlackTranslucent()

      // set status bar to white
      //this.statusBar.backgroundColorByHexString('');
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
   }
}
