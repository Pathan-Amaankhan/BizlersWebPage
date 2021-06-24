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
  }
  getWidth(val){
    this.widthOfPage = val.target.innerWidth;
  }

  sufficientWidth() {
    return (this.widthOfPage >= 768);
  }

  ngOnInit(): void {
  }
}
