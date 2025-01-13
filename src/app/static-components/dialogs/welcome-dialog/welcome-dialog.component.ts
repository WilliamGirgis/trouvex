import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-welcome-dialog',
  standalone: false,
  // imports: [],
  templateUrl: './welcome-dialog.component.html',
  styleUrl: './welcome-dialog.component.scss'
})
export class WelcomeDialogComponent {

constructor(public dialogRef:MatDialogRef<WelcomeDialogComponent>,@Inject(MAT_DIALOG_DATA) public data: {userpseudo:string}) {

}
}
