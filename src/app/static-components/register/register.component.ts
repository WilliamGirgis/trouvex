import { Component, OnInit } from '@angular/core';
import {MatDialogRef} from '@angular/material/dialog';
import { UntypedFormBuilder, UntypedFormGroup, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/internal/operators/map';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  sucessMsg?:string
  /*constructor(public dialogRef:MatDialogRef<RegisterComponent>,private http:HttpService,private authService:AuthService) { }

  ngOnInit() {
  }

  msg:String = ""
  submited=false;
 */
  readonly registerUserURL = 'http://localhost:4200/user/users';

  save(id: string,firstname:string,lastname:string,tel:string,email:string,country:string, password: string) {

  let user = { id: id,firstname:firstname,lastname:lastname,tel:tel,email:email,country:country,password:password };
  console.log(user)
  return this.http
    .post(this.registerUserURL, user)
    .pipe(
      map((data) => {

        this.sucessMsg = "Vous êtes bel et bien inscrit !"
setTimeout(() =>{
  this.sucessMsg = undefined
},2000)
      })
    )
    .subscribe((result) => {});
}



  type = 'password'


  codes = [{lang:'FR',code:'+33 '},{lang:'US',code:"+1 "},{lang:'TR',code:'+90 '},{lang:'DE',code:'+49 '},{lang:'UK',code:'+44 '},{lang:'LU',code:'+352 '}]
  currentCode = this.codes[0]
  errorMessages = {

    id:{required:'The pseudonyme is required',     minlength: 'The Pseudo name must contain at least 5 characters'},
    password: {
      required:'Password is required',
      minlength: 'The password must contain at least 12 characters'

    },
    firstname: {
      required:'First name is required.',


    },
    lastname: {
      required:'Last name is required.',


    },
    tel :{
      required:'Tel. number is required',
      pattern: 'Tel. number must contain only numbers.',
    },
    email: {
      required:'Email is required',
      email :'Email is not in valid format.'
    },
    country: {required:'The country is required'}
  }


  formErrors = { id:'' ,firstname: '', lastname: '', tel: '', email: '',country:'',password:'' };

  subscribeForm:UntypedFormGroup = this.formBuilder.group({

    id:['',[Validators.required,Validators.minLength(5)]],
   firstname : ['',[Validators.required]],
   lastname: ['', [Validators.required]],
   tel : ['', [Validators.required],],
   email: ['', [Validators.required,Validators.email]],
   country: ['',[Validators.required]],
   password: ['',[Validators.required,Validators.minLength(12)]]


  }
  );
  isValid = this.subscribeForm.valid

  constructor(private formBuilder:UntypedFormBuilder,public dialogRef:MatDialogRef<RegisterComponent>,private http:HttpClient) {

    this.subscribeForm.valueChanges.subscribe((data) => {
      this.isValid = this.subscribeForm.valid
 const form = this.subscribeForm

      for(const input in this.formErrors) {

        if(this.formErrors.hasOwnProperty(input)) {
          console.log(1)
          this.formErrors[input] =''
          const control = form.get(input) //We take the control name
          console.log("control.errors")
          if(control && control.dirty && !control.valid) {
            const messages = this.errorMessages[input]
            for (const key in control.errors) {
              if(control.errors.hasOwnProperty(key)) {
                this.formErrors[input] += messages[key] + ' '
              }
            }
          }
        }
      }
    })
   }

  ngOnInit(): void {

  }

  onSubmit() {

    let id = this.subscribeForm.get('id').value
    let firstname = this.subscribeForm.get('firstname').value
    let lastname = this.subscribeForm.get('lastname').value
    let tel = this.subscribeForm.get('tel').value
    let email = this.subscribeForm.get('email').value
    let country = this.subscribeForm.get('country').value
    let password = this.subscribeForm.get('password').value

    this.save(id,firstname,lastname,tel,email,country,password)
  }

  showHidePassword() {

    if(this.type === 'password') {
      this.type = 'text'
    } else {
    this.type = 'password'
    }
  }
  setLang(code) {
    this.currentCode = code
  }
}
