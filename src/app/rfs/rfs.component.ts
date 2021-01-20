import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators} from '@angular/forms';
@Component({
  selector: 'app-rfs',
  templateUrl: './rfs.component.html',
  styleUrls: ['./rfs.component.css']
})
export class RfsComponent implements OnInit {

  myForm: FormGroup

  constructor(private fb:FormBuilder){
    // create an Object for our form controls
    let formControls = {
      firstname: new FormControl('',[
        Validators.required,
        Validators.pattern("[a-z]+"),
        Validators.minLength(2)
      ])
    }
    // relier - attach our Form with our FormControls
    this.myForm = this.fb.group(formControls);
   }

   get firstname(){
     return this.myForm.get('firstname');
   }

  ngOnInit(){ 
    
  }
  save(){
    console.log(this.myForm.value)
  }

  



}
