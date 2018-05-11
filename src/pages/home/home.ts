import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController) {
  
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Hey Prabhjot!',
      subTitle: 'Your friend, Vinit, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

}

