import { Component, OnInit, Input} from '@angular/core';
import {MatDrawer} from "@angular/material/sidenav";

@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {

  @Input('drawer') drawer: MatDrawer;

  widthOfPage: number;

  constructor() {
    this.widthOfPage = window.innerWidth;
    console.log(this.widthOfPage);
  }
  getWidth(val){
    this.widthOfPage = val.target.innerWidth;
    console.log(this.widthOfPage);
  }

  sufficientWidth() {
    return (this.widthOfPage>=768);
  }

  ngOnInit(): void {
  }
}
