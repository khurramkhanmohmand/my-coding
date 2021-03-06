import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';
import { HelpService } from '../help.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  parentMessage = "message from parent"

  msg = false;
  @ViewChild(ViewChildComponent) child: ViewChildComponent;
  listing: any;
  constructor(
    public helpService: HelpService
  ) {
    this.helpService.registerHomeApp(this);
   }

  ngOnInit(): void {
    
  }
  changeMessage(){
    this.parentMessage = 'new message';
    console.log(this.parentMessage);
  }
  ngAfterViewInit(): void{
    console.log(this.child.message);
  }
  ngOnChanges(): void{
    console.log('Changed message '+this.child.message);
  }

  filterFunction(){
    this.listing =  this.listing.filter((el) => {
      if(el.name == 'Awais Aslam'){
        console.log('el value', el.name);
        return this.listing;
      }
    
    });
  }

}
