import { AfterViewInit, ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Possesions } from '../../../../shared/possesions';
import { MatDialog } from '@angular/material/dialog';
import { QrCodeDialogComponent } from '../../../../static-components/dialogs/qr-code-dialog/qr-code-dialog.component';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FileUploader, FileUploadModule } from 'ng2-file-upload';
import { MatInputModule } from '@angular/material/input';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatNativeDateModule } from '@angular/material/core';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';

@Component({
  standalone: true,

    selector: 'app-userview',
    templateUrl: './userview.component.html',
    styleUrls: ['./userview.component.scss'],
  imports:[MatMenuModule,FileUploadModule,MatNativeDateModule,MatDatepickerModule,FormsModule,MatFormFieldModule,MatInputModule,CommonModule,MatRadioModule,MatButtonModule,ReactiveFormsModule],
      changeDetection: ChangeDetectionStrategy.Default
})
export class UserviewComponent implements OnInit,AfterViewInit {
test(event:Event) {

}
  objects:Possesions [] = [

    // {
    //   ownerId: '1tyty1', lost: true, name: "Téléphone Galaxy s21 Noir", code: "TYOUI123", image: '../../../assets/images/s21.PNG',
    //   marque: 'Samsung',model:'s21',looses:[{foundDate:160343434,lostDate:2132525252,foundBy_UserId:"Samuel Becker"}]
    // },
    // {
    //   ownerId: '2tyty2', lost: true, name: "Trousseau de 5 clées", code: "TYOUI623", image: '../../../assets/images/Clefs.PNG',
    //   looses:[{foundDate:160343434,lostDate:2132525252,foundBy_UserId:"Samuel Becker"}]
    // },
    // {
    //   ownerId: '3tyty3', lost: false, name: "Ordinateur Dell Intel i5", code: "TYOUI523", image: '../../../assets/images/Dell.PNG',
    //   looses:[{foundDate:160343434,lostDate:2132525252,foundBy_UserId:"Daniel Akgul"}]
    // },
    // {
    //   ownerId: '4tyty4', lost: false, name: "Porte feuille vert Zara", code: "TYOUI323", image: '../../../assets/images/Wallet.PNG',
    //   marque: 'Zara',looses:[{foundDate:160343434,lostDate:2132525252,foundBy_UserId:"Djokhar Toutakov"}]
    // },    {
    //   ownerId: '4tyty4', lost: false, name: "Porte feuille vert Zara", code: "TYOUI323", image: '../../../assets/images/Wallet.PNG',
    //   marque: 'Zara',looses:[{foundDate:160343434,lostDate:2132525252,foundBy_UserId:"Djokhar Toutakov"}]
    // },    {
    //   ownerId: '4tyty4', lost: false, name: "Porte feuille vert Zara", code: "TYOUI323", image: '../../../assets/images/Wallet.PNG',
    //   marque: 'Zara',looses:[{foundDate:160343434,lostDate:2132525252,foundBy_UserId:"Djokhar Toutakov"}]
    // }
  ]

  openQRCodeDialog(img:string) {
    this.dialog.open(QrCodeDialogComponent, {minWidth:"max-content",height:'max-content',data:{img:img},exitAnimationDuration:200,enterAnimationDuration:300})

  }
  constructor(public dialog:MatDialog) {
    this.uploader.onAfterAddingFile  = async (file)  => {

      let img = new File([file._file], 'profile'); // On transform le Blob en fichier
      let fr = new FileReader(); // On li le fichier et stock le nouveau format
      fr.readAsDataURL(img)
      fr.onloadend = () => {
        // la donnée à afficher dans le parametre '[src]' de la balise image
        this.imgUploaded = fr.result
        this.imageList.push(fr.result)

      }
    }

    this.uploader.onWhenAddingFileFailed = (file) => {
      let tempFile = file.rawFile
      this.imgUploaded = tempFile
      let img = new File([file.rawFile as Blob], file.name!); // On transform le Blob en fichier
      let fr = new FileReader(); // On li le fichier et stock le nouveau format
      fr.readAsDataURL(img)
      fr.onloadend = () => {
        // la donnée à afficher dans le parametre '[src]' de la balise image
        this.imgUploaded = fr.result


      }
    }

  }
  ngAfterViewInit(): void {

  }
  triggerFileInput() {
    setTimeout(() => {
      document.getElementById('fileInput')?.click();
    }, 0);
  }
  imageList:any [] = []

  imgUploaded?:any
  uploader:FileUploader = new FileUploader({url:'t',queueLimit:1})

  menuOn:boolean = false
  hiddenListHeight?:number
  selectedIndexDetails?:number
  photoControl:FormControl = new FormControl()
  typeControl:FormControl = new FormControl()
  supportControl:FormControl = new FormControl()
  formGroup:FormGroup = new FormBuilder().group([this.photoControl,this.typeControl,this.supportControl])


  ngOnInit() {

  }

}
