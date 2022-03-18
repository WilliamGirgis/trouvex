import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';


@Component({
  selector: 'app-secureview',
  templateUrl: './secureview.component.html',
  styleUrls: ['./secureview.component.scss']
})
export class SecureviewComponent implements OnInit {

  type = 'password'


  codes = [{lang:'FR',code:'+33 '},{lang:'US',code:"+1 "},{lang:'TR',code:'+90 '},{lang:'DE',code:'+49 '},{lang:'UK',code:'+44 '},{lang:'LU',code:'+352 '}]
  currentCode = this.codes[0]
  errorMessages = {
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
    password: {
      required:'Password is required',
      minlength: 'The password must contain at least 12 characters'

    }
  }


  formErrors = { firstname: '', lastname: '', tel: '', email: '',password:'' };

  subscribeForm:FormGroup = this.formBuilder.group({

   firstname : ['',[Validators.required]],
   lastname: ['', [Validators.required]],
   tel : ['', [Validators.required],],
   email: ['', [Validators.required,Validators.email]],
   password: ['',[Validators.required,Validators.minLength(12)]]

 
  }
  );
  isValid = this.subscribeForm.valid

  constructor(private formBuilder:FormBuilder) {

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

  labelAbsolute() {
  
  }
  

}
