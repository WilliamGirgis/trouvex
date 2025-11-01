import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, ElementRef, Inject, NgZone, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { getMatFormFieldMissingControlError, MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule ,} from '@angular/material/input';
import { MatRadioModule } from '@angular/material/radio';
import {MatNativeDateModule, provideNativeDateAdapter} from '@angular/material/core';
import { FileUploader,FileUploadModule } from 'ng2-file-upload';
import { MatMenuModule } from '@angular/material/menu';
import { LostObject } from '../../../shared/lostObjet';
import { LostObjectService } from '../../../services/lost-object.service';
import { formatDate } from '@angular/common';
// import { FileUploader,FileUploadModule  } from 'ng2-file-upload';
declare const google: any;
@Component({
  standalone:true,
  imports:[MatMenuModule,FileUploadModule,MatNativeDateModule,MatDatepickerModule,FormsModule,MatFormFieldModule,MatInputModule,CommonModule,MatRadioModule,MatButtonModule,ReactiveFormsModule],
  selector: 'app-save-item-dialog',
  templateUrl: './save-item-dialog-found.component.html',
  styleUrl: './save-item-dialog-found.component.scss',
  providers: [provideNativeDateAdapter()],

  changeDetection: ChangeDetectionStrategy.Default
})
export class SaveItemDialogComponent implements OnInit {
  imageList:any = []
  constructor(public lostObjectService:LostObjectService,public dialogRef:MatDialogRef<SaveItemDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: {},private ngZone: NgZone) {

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
  ngOnInit(): void {
    const autocomplete = new google.maps.places.Autocomplete(this.searchBox.nativeElement, {
      types: [], // Limite la recherche aux villes

    });

    // Écouter l'événement "place_changed" pour récupérer les détails de la ville sélectionnée
    autocomplete.addListener('place_changed', () => {
      const place = autocomplete.getPlace();
      if (place.geometry) {
        this.lat = place.geometry.location?.lat();
        this.long = place.geometry.location?.lng();
        this.formGroup.controls['zone'].setValue(place.address_components?.[0]?.long_name)

        // Utilisez `ngZone.run` pour mettre à jour les données Angular
        this.ngZone.run(() => {
          // console.log('Ville sélectionnée :', this.formGroup.controls['zone'].value);
          // console.log('Latitude :', this.lat, 'Longitude :', this.long);
        });
      }
    });

  }

  @ViewChild('citySearchBox', { static: true }) searchBox!: ElementRef;

  uploader: FileUploader = new FileUploader({url:'',queueLimit:4,autoUpload:false});
imgUploaded?:any
  formGroupBuilder:FormBuilder = new FormBuilder()
  formGroup:FormGroup = this.formGroupBuilder.group({
    description:[''],
    radio:[''],
    date:[],
    zone:[],
    hour:[]
  })

  long:any = 0
  lat:any = 0

 days = ['lundi','mardi','mercredi','jeudi','vendredi','samedi','dimanche']
  saveItem() {


    let itemDetail:LostObject = {
      description: this.formGroup.controls['description'].value,
      date: this.formGroup.controls['date'].value ? (this.days[new Date(this.formGroup.get('date')?.value as Date).getDay() - 1] + ' ' + new Date(this.formGroup.get('date')?.value as Date).toLocaleDateString()) : this.days[new Date(this.formGroup.get('date')?.value as Date).getDay() - 1] + " " + new Date().toLocaleDateString(),
      hour:this.formGroup.controls['hour'].value,
      latitude:this.lat,
      longitude:this.long,
      zone:this.formGroup.controls['zone'].value,
      imgList: this.imageList,
      type:"found"
    }

    this.lostObjectService.addItem(itemDetail)

    this.dialogRef.close()
  }
}
