import { Component, OnInit } from '@angular/core';
import { Possesions } from '../../shared/possesions';
import { MatDialog } from '@angular/material/dialog';
import { QrCodeDialogComponent } from 'src/app/static-components/dialogs/qr-code-dialog/qr-code-dialog.component';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {

  objects:Possesions [] = [

    {
      ownerId: '1tyty1', lost: true, name: "Téléphone Galaxy s21 Noir", code: "TYOUI123", image: '../../../assets/images/s21.PNG',
      marque: 'Samsung',model:'s21',looses:[{foundDate:160343434,lostDate:2132525252,foundBy_UserId:"Samuel Becker"}]
    },
    {
      ownerId: '2tyty2', lost: true, name: "Trousseau de 5 clées", code: "TYOUI623", image: '../../../assets/images/Clefs.PNG',
      looses:[{foundDate:160343434,lostDate:2132525252,foundBy_UserId:"Samuel Becker"}]
    },
    {
      ownerId: '3tyty3', lost: false, name: "Ordinateur Dell Intel i5", code: "TYOUI523", image: '../../../assets/images/Dell.PNG',
      looses:[{foundDate:160343434,lostDate:2132525252,foundBy_UserId:"Daniel Akgul"}]
    },
    {
      ownerId: '4tyty4', lost: false, name: "Porte feuille vert Zara", code: "TYOUI323", image: '../../../assets/images/Wallet.PNG',
      marque: 'Zara',looses:[{foundDate:160343434,lostDate:2132525252,foundBy_UserId:"Djokhar Toutakov"}]
    },    {
      ownerId: '4tyty4', lost: false, name: "Porte feuille vert Zara", code: "TYOUI323", image: '../../../assets/images/Wallet.PNG',
      marque: 'Zara',looses:[{foundDate:160343434,lostDate:2132525252,foundBy_UserId:"Djokhar Toutakov"}]
    },    {
      ownerId: '4tyty4', lost: false, name: "Porte feuille vert Zara", code: "TYOUI323", image: '../../../assets/images/Wallet.PNG',
      marque: 'Zara',looses:[{foundDate:160343434,lostDate:2132525252,foundBy_UserId:"Djokhar Toutakov"}]
    }
  ]

  openQRCodeDialog(img:string) {
    this.dialog.open(QrCodeDialogComponent, {minWidth:"max-content",height:'max-content',data:{img:img},exitAnimationDuration:200,enterAnimationDuration:300})

  }
  constructor(public dialog:MatDialog) {


  }
  menuOn:boolean = false
  hiddenListHeight?:number
  selectedIndexDetails?:number
  photoControl:FormControl = new FormControl()
  typeControl:FormControl = new FormControl()
  supportControl:FormControl = new FormControl()
  formGroup:FormGroup = new FormBuilder().group([this.photoControl,this.typeControl,this.supportControl])
  displayDetails(i:number) {
    this.selectedIndexDetails == i ? this.selectedIndexDetails = undefined: this.selectedIndexDetails = i
      this.hiddenListHeight = document.getElementById(`sub-wrap`)!.offsetHeight
  }

  ngOnInit() {

  }

}
