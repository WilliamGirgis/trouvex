import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-findview',
  templateUrl: './findview.component.html',
  styleUrls: ['./findview.component.scss']
})
export class FindviewComponent implements OnInit {

  constructor(private formBuilder:FormBuilder) {

    this.sendCodeForm.valueChanges.subscribe((data) => {
      this.isValid = this.sendCodeForm.valid

    })
   }



    sendCodeForm:FormGroup = this.formBuilder.group({

    code: [,[Validators.required,Validators.maxLength(5),Validators.minLength(5)]]
 
  }
  );
isValid = this.sendCodeForm.valid


 

  ngOnInit(): void {


  }


  onSubmitCode() {


  }

}
