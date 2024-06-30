import { Component } from '@angular/core';
import {FormBuilder, FormGroup,FormControl} from "@angular/forms";

@Component({
  selector: 'app-add-edit-component',
  templateUrl: './add-edit-component.component.html',
  styleUrls: ['./add-edit-component.component.css']
})
export class AddEditComponentComponent {
  education: string[]=['SSc','Hsc','Bsc','Graduate']
  emFrom=new FormGroup(
    {
      firstname:new FormControl(''),
      lastname:new FormControl(''),
      email:new FormControl,
      dob:new FormControl,
      gender:new FormControl,
      edu:new FormControl,
      company:new FormControl,
      experience:new FormControl,
      package:new FormControl

    }
  )
  registation(){

    console.warn(this.emFrom.value)
  }
}
