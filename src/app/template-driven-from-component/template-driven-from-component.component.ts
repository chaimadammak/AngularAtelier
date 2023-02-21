import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-template-driven-from-component',
  templateUrl: './template-driven-from-component.component.html',
  styleUrls: ['./template-driven-from-component.component.css']
})
export class TemplateDrivenFromComponentComponent implements OnInit {

  Nom !: String;
  Prenom!:String;
  Email!:String;
  TypeCarte !:String;
  NumCarte!:Number;
  DateExp!:Date;
  Code!:Number;

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(myForm: NgForm) {
    console.log(myForm.value);
  }

}
