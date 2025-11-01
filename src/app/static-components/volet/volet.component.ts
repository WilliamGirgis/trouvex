import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
    selector: 'app-volet',
    templateUrl: './volet.component.html',
    styleUrls: ['./volet.component.scss'],
    standalone: false
})
export class VoletComponent implements OnInit {

@Input() isVoletUp:boolean = false
@Output() closeVoletOutput:EventEmitter<any> = new EventEmitter()
  items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

  setVoletOff() {
this.closeVoletOutput.emit()
  }
  constructor() {}

  ngOnInit() {

  }
}


//     (click)="closeVoletOutput.emit()" -> event handler to add to a button to make it close on click
