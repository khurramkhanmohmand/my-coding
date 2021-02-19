import { Injectable } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';

@Injectable({
  providedIn: 'root'
})
export class HelpService {
 public HomeComponent: HomeComponent;
 public HeaderComponent: HeaderComponent;


  registerHomeApp(myApp: HomeComponent) {
    this.HomeComponent = myApp
  }

  registerHeaderApp(myApp: HeaderComponent) {
    this.HeaderComponent = myApp
  }

  constructor() { }

  popup(){
    this.HomeComponent.child
  }

}

