import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';

@Component({
  selector: 'app-secureview',
  templateUrl: './secureview.component.html',
  styleUrls: ['./secureview.component.scss']
})
export class SecureviewComponent implements OnInit {


  subscribeForm:FormGroup = this.formBuilder.group({

   name : [,[Validators.required]],
   surname: [, [Validators.required]],
   tel : [, [Validators.required]],
   email: [, [Validators.required,Validators.email]]

 
  }
  );
  isValid = this.subscribeForm.valid

  constructor(private formBuilder:FormBuilder) {

    this.subscribeForm.valueChanges.subscribe(() => {
      this.isValid = this.subscribeForm.valid
    })
   }

  ngOnInit(): void {
  }

  onSubmit() {

  }

type = 'password'
  showHidePassword() {
       if(this.type === 'password') {
           this.type = 'text'
       } else {
        this.type = 'password'
       }
  }

}
