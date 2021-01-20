import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validator, Validators } from '@angular/forms';
@Component({
  selector: 'app-test-form',
  templateUrl: './test-form.component.html',
  styleUrls: ['./test-form.component.css']
})
export class TestFormComponent implements OnInit {

  myForm:FormGroup

  constructor(private fb:FormBuilder) {
    let formControls = {
      email : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ]),
      password : new FormControl('',[
        Validators.required,
        Validators.minLength(2)
      ])
    }
    this.myForm = this.fb.group(formControls);
   }

   get getEmail(){
     return this.myForm.get("email")
   }
   get getPassword(){
    return this.myForm.get("password")
  }

  ngOnInit(): void {
  }

  save(){
    console.log(this.myForm.value)
  }

}
