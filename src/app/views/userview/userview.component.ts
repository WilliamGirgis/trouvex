import { Component, OnInit } from '@angular/core';
import { Possesions } from '../../shared/possesions';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {

  objects:Possesions [] = [

    {
      ownerId: '1tyty1', lost: true, name: "Téléphone Galaxy s21 Noir", code: "TYOUI123", image: '../../../assets/images/s21.PNG',
      marque: 'Samsung',model:'s21'
    },
    {
      ownerId: '2tyty2', lost: true, name: "Trousseau de 5 clées", code: "TYOUI623", image: '../../../assets/images/Clefs.PNG',
    },
    {
      ownerId: '3tyty3', lost: false, name: "Ordinateur Dell Intel i5", code: "TYOUI523", image: '../../../assets/images/Dell.PNG',
    },
    {
      ownerId: '4tyty4', lost: false, name: "Porte feuille vert Zara", code: "TYOUI323", image: '../../../assets/images/Wallet.PNG',
      marque: 'Zara'
    }
  ]

  constructor() { }

  ngOnInit() {
  }

}
