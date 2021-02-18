import { Injectable } from '@angular/core';
import { HomeComponent } from './home/home.component';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
 public HomeComponent: HomeComponent;


  registerHomeApp(myApp: HomeComponent) {
    this.HomeComponent = myApp
  }

  constructor() { }

  popup(){
    this.HomeComponent.child
  }

}

