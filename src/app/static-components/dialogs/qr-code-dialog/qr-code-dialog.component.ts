import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-qr-code-dialog',
  standalone: false,
  // imports: [],
  templateUrl: './qr-code-dialog.component.html',
  styleUrl: './qr-code-dialog.component.scss'
})
export class QrCodeDialogComponent {
  constructor(public dialogRef:MatDialogRef<QrCodeDialogComponent>,@Inject(MAT_DIALOG_DATA) public data :{img:string}) {

  }

}
