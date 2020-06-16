import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-nav',
  templateUrl: './main-nav.component.html',
  styleUrls: ['./main-nav.component.css']
})
export class MainNavComponent implements OnInit {
  heightOfPage: string;
  clicked: boolean = false;

  constructor() {
    this.heightOfPage = (window.innerHeight.toString()).concat('px');
  }

  getSize(val){
    this.heightOfPage = (val.target.innerHeight.toString()).concat('px');
  }

  isClicked(){
    this.clicked = !this.clicked;
  }

  ngOnInit(): void {
  }

}
