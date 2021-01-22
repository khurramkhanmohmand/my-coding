import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-view-child',
  templateUrl: './view-child.component.html',
  styleUrls: ['./view-child.component.css']
})
export class ViewChildComponent implements OnInit {
  message = 'Hola Mundo!';

  constructor() { }

  ngOnInit(): void {
  }
  changeMessage(){
    this.message = 'new message';
    console.log(this.message);
  }
}
