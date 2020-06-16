import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  widthOfPage: string;
  constructor() {
    this.widthOfPage = (window.innerWidth.toString()).concat('px');
  }

  getWidth(val) {
    this.widthOfPage = (val.target.innerWidth.toString()).concat('px');
  }

  ngOnInit(): void {
  }

}
