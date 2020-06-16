import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-search-page',
  templateUrl: './search-page.component.html',
  styleUrls: ['./search-page.component.css']
})
export class SearchPageComponent implements OnInit {
  widthOfPage: string;
  heightOfPage: string;
  constructor() {
    this.widthOfPage = ((window.innerWidth).toString()).concat('px');
    this.heightOfPage = ((window.innerHeight).toString()).concat('px');
  }

  getSize(val) {
    this.widthOfPage = ((val.target.innerWidth-5).toString()).concat('px');
    this.heightOfPage = ((val.target.innerHeight-5).toString()).concat('px');
  }

  ngOnInit(): void {
  }

}
