import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-volet',
  templateUrl: './volet.component.html',
  styleUrls: ['./volet.component.scss'],
})
export class VoletComponent implements OnInit {
  isSet = false;
  initZip = 2;
  isButSet = false;
  isLangMenuSet = false
  isLeftMenuUp = false


  setLeftMenu() {
    this.isLeftMenuUp = !this.isLeftMenuUp;

  }
  setLangMenu() {
    this.isLangMenuSet = !this.isLangMenuSet;
  }

  setBut() {
    this.isButSet = !this.isButSet;
  }

  showUp() {
    this.isSet = !this.isSet;
  }

  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];
  constructor() {}

  ngOnInit() {}
}
