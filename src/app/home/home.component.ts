import { Component, OnInit, ViewChild } from '@angular/core';
import { ViewChildComponent } from '../view-child/view-child.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  parentMessage = "message from parent"

  msg = false;
  @ViewChild(ViewChildComponent) child: ViewChildComponent;
  constructor() { }

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

}
