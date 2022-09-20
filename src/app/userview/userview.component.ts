import { Component, OnInit } from '@angular/core';
import { Possesions } from '../shared/possesions';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {

  objects:Possesions [] = [

    {ownerId:'1tyty1',lost:true,name:"putain de phone",code:"TYOUI123",image:null},
    {ownerId:'2tyty2',lost:true,name:"putain de clefs",code:"TYOUI623",image:null},
    {ownerId:'3tyty3',lost:true,name:"putain d'ordinateur",code:"TYOUI523",image:null},
    {ownerId:'4tyty4',lost:true,name:"putain de porte feuille",code:"TYOUI323",image:null}
  ]

  constructor() { }

  ngOnInit() {
  }

}
