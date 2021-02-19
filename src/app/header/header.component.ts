import { Component, OnInit } from '@angular/core';
declare var $: any;
import { HelpService } from '../help.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    public helpService: HelpService
  ) { 
    this.helpService.registerHeaderApp(this);
  }

  ngOnInit(): void {
  }

}
