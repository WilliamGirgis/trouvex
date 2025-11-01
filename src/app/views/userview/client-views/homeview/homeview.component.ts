import { Component, OnInit } from '@angular/core';
import { FileUploader } from 'ng2-file-upload';

@Component({
    selector: 'app-homeview',
    templateUrl: './homeview.component.html',
    styleUrls: ['./homeview.component.scss'],
    standalone: false
})
export class HomeviewComponent implements OnInit {
  uploader:FileUploader = new FileUploader({url:'',queueLimit:1})

  constructor() {

  }

  ngOnInit(): void {
  }

}
