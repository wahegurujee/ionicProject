import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
//import {Observable} from 'rxjs/Observable';

/*
  Generated class for the HomeProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class HomeProvider {
 
  public baseURL = "https://commandcenterhoneywellapi.azurewebsites.net/api/ConnectedDeviceSummary";

  constructor(public http: HttpClient) {
    //console.log('Hello HomeProvider Provider');
  }

    getConnectedDeviceSummary(): Promise<any> {
      return new Promise((resolve: any, reject: any) => {
        this.http.get(this.baseURL).subscribe( response => {
          resolve(response);
          console.log(response);
        }, error => {
          reject(error);
        });
      });    
    }
    

  }
