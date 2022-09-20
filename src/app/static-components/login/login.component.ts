import {  HttpResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import {BaseURL} from 'src/app/shared/basedurl'
import { HttpService } from 'src/app/services/http.service';
import { catchError } from 'rxjs/operators';
import { AuthService } from 'src/app/services/AuthService.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public dialogRef:MatDialogRef<LoginComponent>,private http:HttpService,private authService:AuthService) {
   }

  msg:string = ''
  submited:boolean = false
  error:boolean = false

  ngOnInit(): void {
  }


  loginUser(id: string, password: string) {
    this.authService
      .login(id, password)
      .pipe(
        catchError((err: any) => { // Catch the error from the authservice request
          this.error = true
          return err;
        })
      )
      .subscribe((res: HttpResponse<any>) => {
        this.msg = res.body
        window.location.reload();
      });
  }

  
}
