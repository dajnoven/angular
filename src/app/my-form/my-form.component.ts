import { Component, OnInit } from '@angular/core';
import  { FormControl} from "@angular/forms";

@Component({
  selector: 'app-my-form',
  templateUrl: './my-form.component.html',
  styleUrls: ['./my-form.component.css']
})
export class MyFormComponent implements OnInit {
  name = new FormControl('Petro');

  updateName() {
    this.name.setValue('Petro');
  }

  constructor() { }

  ngOnInit(): void {
  }

}
