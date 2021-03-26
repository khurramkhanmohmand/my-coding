# my-coding

Links: 

Links for different problems:



Reactive Forms


https://jasonwatmore.com/post/2019/06/14/angular-8-reactive-forms-validation-example




https://stackblitz.com/edit/angular-8-reactive-form-validation





Angular :

https://www.positronx.io/angular-7-httpclient-http-service/


@Input - @Output


https://levelup.gitconnected.com/angular-7-share-component-data-with-other-components-1b91d6f0b93f


Carousel:

https://therichpost.com/how-to-implement-owl-carousel-slider-in-angular-7/


Loaders:

https://loading.io/css/


Drag & Drop:

http://www.designchemical.com/blog/index.php/jquery/create-add-remove-select-lists-using-jquery/


Timezone setting:

https://stackblitz.com/edit/angular-moment-example?file=app%2Fapp.component.ts

Package for local search:

https://www.npmjs.com/package/ng2-search-filter

Nano bar for loader :

https://nanobar.jacoborus.codes/

Git commands:  https://www.atlassian.com/git/tutorials/syncing/git-pull

Credit Card validation package:

https://www.npmjs.com/package/angular-cc-library

Google map:

https://www.freakyjolly.com/angular-google-maps-using-agm-core/#.X0-DLWczZ3l

Sliders and modals bootstrap:

https://mdbootstrap.com/docs/jquery/modals/basic/

https://mdbootstrap.com/md-bootstrap-cdn/

For events subscribe (from one data to another data call ):

https://www.npmjs.com/package/angular4-events

Upload pic on angular /html:

https://stackoverflow.com/questions/48343853/angular-5-how-to-upload-an-image

Google map:

https://github.com/angular/components/blob/master/src/google-maps/README.md


Make web/portal use as app:

ng add @angular/pwa


Rich HTML like summerNote:

https://stackblitz.com/edit/angular-editor-wysiwyg?file=src%2Fapp%2Fapp.component.ts

Stepper:

https://bbbootstrap.com/snippets/multi-step-form-wizard-30467045

https://codepen.io/asaoluelijah/pen/dyPyNOe


Pagination: 
https://ciphertrick.com/search-sort-pagination-angular/
npm install ngx-pagination --save

Ngx-toastr:

https://www.npmjs.com/package/ngx-toastr

Data List Element => show option with search:  
https://www.w3schools.com/tags/tryit.asp?filename=tryhtml5_datalist

The map and area elements:

https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_areamap


Lazy Loading:

https://medium.com/@thiago.reis/how-to-implement-lazy-loading-in-angular-c8dcbf165561

Date and Formate: 

https://www.javatpoint.com/typescript-date-object

Chatbox:

https://www.npmjs.com/package/ngx-socket-io

 General things:

 General problems and solutions

 Toastr version : ng6-toastr-notifications 1.0.4 

     https://www.npmjs.com/package/ng6-toastr-notifications


Nanobar code link

https://nanobar.jacoborus.codes/


how to show textbox empty by default ??

we can use :

autocomplete=“off”
autocomplete=“false”
autocomplete="autocomplete_off_hack_xfr4!k"


 If change function not detect by system then use this :

ChangeDetectorRef  => first import it in component like this

* import { Component, OnInit, ChangeDetectorRef } from '@angular/core';

and then also use it in constructor:

* private changeRef: ChangeDetectorRef  then after use 
	
this.changeRef.detectChanges();

on the function where change function originally call

4: option box styles  https://freefrontend.com/css-select-boxes/ 

"Chosen is a jQuery plugin that makes long, unwieldy select boxes much more user-friendly": http://harvesthq.github.io/chosen/



make a component in directory:
 first click right and make directory then go to terminal and write this way:

ng g c category/ category



make new build:

ng build --prod --build-optimizer 




Open Link in other page or same page from .ts (after click) :


Html: 

<div class="col-md-12" *ngFor="let data of headerData; let i = index;" (click)="goToLink(i)">


.ts:

goToLink(i) {
  console.log(this.headerData[i].url);
  // window.location.href  = 'https://' + this.headerData[i].url;


  // open in another tab

  // window.open(`https://${this.headerData[i].url}`, '_blank');

  // open in same tab
  window.location.href  = `https://${this.headerData[i].url}`;

}


To show dots in name or description like ( this is my ……) Html :



<h5 class="slide-heading" *ngIf="item.name.length < 18">{{item.name}}</h5>
<h5 class="slide-heading" *ngIf="item.name.length > 18">{{item.name.slice(0, 17)}}...</h5>



Browser back click ( when click back it takes you last page u open) :

<a  (click)="backButton()"> Back </a>


backButton(){
  window.history.go(-1);
}


Change the fix / bootstrap css tags:

::ng-deep.class{

}


For adjust the view of [innerHtml] = “variable”  we use safe pipe :

* ng generate pipe safe

And then replace to this :
 transform(value) {
    return this.sanitized.bypassSecurityTrustHtml(value);
  }


Link: https://medium.com/@swarnakishore/angular-safe-pipe-implementation-to-bypass-domsanitizer-stripping-out-content-c1bf0f1cc36b



To hide Nav and footer from any page :

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app';
  routeCheck: any = false;
  
  constructor( 
    public router:Router,
    ){

      let path: any = window.location.href;
      path = path.split('/');
      console.log(path[3]);
      if(path[3] === 'app-faqs') {
        this.routeCheck = true;
      } 
  }

  ngOnInit() {

  }
}


On component.html:

<app-navbar *ngIf="routeCheck === false"></app-navbar>


Navigation Route through TS:

 navigateSignUp() {
    let navigationExtras = {
      queryParams: { 'signup': true },
    }
    this.router.navigate(['/nonprofits'], navigationExtras);
  }

“Link: www.nonprofits?signup=true”


*ngIf conditions in angular :
https://malcoded.com/posts/angular-ngif-else/

Make web/portal use as app:

ng add @angular/pwa



Pagination:

example:

Declear variables:

CustomerOrderListingPage:any;
customerOrderListingPagination = 0;
lastPage: any;

after then make a new function:

function(){
this.CustomerOrderListingPage = [];
this.customerOrderListingPagination++;

//call api from data service.ts  from which u want to do pagination.//

this.dataService.getorderlisting(this.id, window.localStorage.getItem('token'), this.customerOrderListingPagination, this.ordertype, this.businessid, this.searchOrder, this.startDate, this.endDate) .subscribe(

// after then //

this.CustomerOrderListingPage = data;

this.lastPage = this.CustomerOrderListingPage.last_page;

this.CustomerOrderListingPage = this.CustomerOrderListingPage.items;

console.log('CustomerOrderListingPage', this.CustomerOrderListingPage);

for ( var i = 0; i < this.CustomerOrderListingPage.length; i++) {
  this.customerOrderListing.push(this.CustomerOrderListingPage[i]);
}
},
    (error) => {
    }
  );
}



……………………………………in html ……………………………


<div class="cl-md-12 clearfix text-center form-group" *ngIf="lastPage === false">
  
     <a class="btn btn-custom" (click)="CustomerOrderListingByPage()" >Load More</a>

</div>



API 



For API’s we need first  data.services.ts and constants.ts in “app folder”  then In data.servces.ts :

we import {HttpClient,HttpHeaders}
and {Constants}

for look like this:

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import  { Constants} from './constants';

const version_number = 1.5;
const headers = new HttpHeaders({});

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

getDetails(){
  return this.http.post( Constants.apiadress + '/client_web/validate_zip', JSON.stringify({ version_number }),
    { headers: headers });
}


// If you pass ID //
getDetails(article_id) {
  return this.http.post(Constants.apiadress + '/client/get_article_detail', JSON.stringify({ version_number, article_id }),
    { headers: headers });
}

}


………………………………………………………………………………………………………………

On other hand in which folder /component we want to display we use to code on it typescript we used to import 2 things   import {DataService } from '../data.service';
import  {ActivatedRoute} from '@angular/router';
 

and then we write in constructor like this : 

constructor(private dataService: DataService, private route: ActivatedRoute)


and we also take variables :

storyDetails: any;
id : any;
sub: any;



and the full code :

import { Component, OnInit } from '@angular/core';
import {DataService } from '../data.service';
import  {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-story',
  templateUrl: './story.component.html',
  styleUrls: ['./story.component.css']
})
export class StoryComponent implements OnInit {

  storyDetails: any;
  id : any;
  sub: any;


  constructor(private dataService: DataService, private route: ActivatedRoute) {

//for calling from id : //

    this.sub = this.route.params.subscribe(params => {
      this.id = +params['id']; // (+) converts string 'id' to a number
      console.log('this.id', this.id);
    });
  }

//simple calling api//

  getstored(){
    this.dataService.getDetails(this.id).subscribe(
      (data) => {
        this.storyDetails = data;
        console.log('storyDetails', this.storyDetails);
      },
      (error) => {
      }
    );
  }


  ngOnInit() {
    this.getstored();
  }

...................................................................

  Password and users:



Snore Admin:

User: admin Password: Admin123

http://snoreadmin.s3-website.eu-west-2.amazonaws.com/


INTIGO FIGURES ADMIN:
=> Dev
ID:  Intigoadmin
Password: Intigo@123

http://admin-dev.intigofigures.com/

=> Prod
ID:  Intigoadmin
Password: 17tig0@dw

http://admin.intigofigures.com/

TheForProject Admin:

ID: theforproject
Password: For1234Project

http://theforproject-admin-webportal.s3-website-us-east-1.amazonaws.com/


TheForProject website:
 
http://theforproject-website-dev.s3-website-us-east-1.amazonaws.com/


TourFly:

Prod:

ID: admin Password: letmein

http://tourfly-admin-p.s3-website-us-west-2.amazonaws.com/


Wik:

Base Url:   https://us-central1-wik-game.cloudfunctions.net

App link : https://wik-game.firebaseapp.com/

Documentation: https://documenter.getpostman.com/view/3090294/SVmwvxuC?version=latest



Login:            admin@worldofinescapableknowledge.com
Password:   WIK123abc


BBM:

ng serve --configuration=dev 