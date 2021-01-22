import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-child-demo',
  templateUrl: './child-demo.component.html',
  styleUrls: ['./child-demo.component.css']
})
export class ChildDemoComponent implements OnInit {

  @Input() childMessage: string;

  constructor() { }

  ngOnInit(): void {
    console.log(this.childMessage);
  }
  ngOnChanges(): void{
    console.log(this.childMessage);
  }

}
