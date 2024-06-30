import { Component } from '@angular/core';
import {MatDialog} from "@angular/material/dialog";
import {AddEditComponentComponent} from "./add-edit-component/add-edit-component.component";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angularCRUD';

  constructor(private dialog: MatDialog) {
  }
  openAddEditEmpFrom(){
    this.dialog.open(AddEditComponentComponent)
  }

}
