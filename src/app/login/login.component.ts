import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms'
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

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

  send() {
    console.log("success.")
  }

}
