import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  isLangMenuSet = false
  constructor() { }

  ngOnInit(): void {
  }

  setLangMenu() {
    this.isLangMenuSet = !this.isLangMenuSet;
  }

}
