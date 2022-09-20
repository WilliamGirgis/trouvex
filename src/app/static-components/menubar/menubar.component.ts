import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/AuthService.service';
@Component({
  selector: 'app-menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.scss']
})
export class MenubarComponent implements OnInit {
  isLangMenuSet = false
  isConnected:Boolean
  constructor(private authService:AuthService) { 
    this.isConnected = authService.isConnected
  }

  ngOnInit(): void {
  }

  setLangMenu() {
    this.isLangMenuSet = !this.isLangMenuSet;
if(this.isLangMenuSet) {
  document.getElementById('menu-lang').style.backgroundColor = "rgb(99, 32, 46)"
} else {
  document.getElementById('menu-lang').style.backgroundColor = "transparent"
}
  }

}
