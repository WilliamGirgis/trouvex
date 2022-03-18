import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-adminview',
  templateUrl: './adminview.component.html',
  styleUrls: ['./adminview.component.scss']
})
export class AdminviewComponent implements OnInit {


  readonly getUserIdULR = 'http://localhost:4200/user/users/id';
  readonly getUser_IdULR = 'http://localhost:4200/user/users/_id';
  userList: string[] = [];
  noUser?:boolean = false
  successMsgSaved: string;
  isSuccess: boolean;
  readonly registerUserURL = 'http://localhost:4200/user/users';
  constructor(private formBuilder:FormBuilder,private http:HttpClient,private route: ActivatedRoute,private router:Router) { }
  
  saveForm:FormGroup = this.formBuilder.group({

    id : ['',[Validators.required]],
    /*lastname: ['', [Validators.required]],
    tel : ['', [Validators.required],],*/
    psw: ['',[Validators.required,Validators.minLength(1)]]
 
  
   }
   );

   save(id: string, psw: string) {
    let user = { id: id, password: psw };
    console.log(user)
    return this.http
      .post(this.registerUserURL, user)
      .pipe(
        map((data) => {
         this.successMsgSaved =  "User saved successfuly !"
         this.isSuccess = true
         this.getUsers(' ');
        })
      )
      .subscribe((result) => {});
  }



   
  getUsers(input: string) {
    const querParam = new HttpParams().set('id', input);
    this.http
      .get(this.getUserIdULR, { params: querParam, responseType: 'text' })
      .pipe(
        map((data) => {
          this.userList = JSON.stringify(data).split(/,|\[|\]|"|Admin/).filter(Boolean);
          console.log(this.userList)
          if(this.userList.length <= 0) {
            this.noUser = true
          } else {
            let target:string
            this.router.navigate([target])
            this.getuser_ID(this.userList[0])
            this.noUser = false
          }
        })
      )
      .subscribe((result) => {});
  }


  getuser_ID(_id: string) {

    const querParam = new HttpParams().set('id', _id);
    this.http
      .get(this.getUser_IdULR, { params: querParam, responseType: 'text' })
      .pipe(
        map((data) => {

        })
      )
      .subscribe((result) => {});
  }


  ngOnInit() {
    this.getUsers(' ')
  }

}
