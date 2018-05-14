import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { HomeProvider } from '../../providers/home/home';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [HomeProvider]
})
export class HomePage {
  public deviceSummary: any = [];
 
  constructor(public navCtrl: NavController, public alertCtrl: AlertController, private globeDataService: HomeProvider)
  {
 
  }
  showAlert() {
    let alert = this.alertCtrl.create({
      title: 'Hey Prabhjot!',
      subTitle: 'Your friend, Vinit, just accepted your friend request!',
      buttons: ['OK']
    });
    alert.present();
  }

  //  getDeviceSummary = this.globeDataService.getConnectedDeviceSummary().subscribe(data =>
  //    this.getDeviceSummary = data);
  //  this.propertyService.findAll().subscribe(data => this.properties = data);
  //   }    
        //  console.log(getDeviceSummary);
        getDeviceSummary = this.globeDataService.getConnectedDeviceSummary()
          .then(data => {
            this.deviceSummary = data;
            console.log(this.deviceSummary);
          }, err => {

          });
        
          isNull(val) {
            if (val) {
              if (val.toLowerCase() === 'null') {
                return true;
              } else {
                return false;
              }
            }
            return true;
          }
      
          checkDataLength(val: string, idx: number) {
            const valueCls = val.length > 3 ? 'col-xs-3' : 'col-xs-2';
            return valueCls;
          }
        
          formatKpiLabel(val: string) {
            const delimiterIdx = val.lastIndexOf('/');
            const labelParts = [];
            if (delimiterIdx !== -1) {
              labelParts.push(val.substring(0, delimiterIdx));
              labelParts.push(val.substring(delimiterIdx + 1, val.length));
            } else {
              labelParts.push(val);
            }
            return labelParts;
          }    
      
          trimUnit(val: string) {
            if (val.length > 1) {
              return val[0];
            }
            return val;
          }
        

}

