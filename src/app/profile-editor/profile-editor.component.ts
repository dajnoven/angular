import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl, Validators} from "@angular/forms";
import {Observable} from "rxjs";

@Component({
  selector: 'app-profile-editor',
  templateUrl: './profile-editor.component.html',
  styleUrls: ['./profile-editor.component.css']
})
export class ProfileEditorComponent implements OnInit {
  profileForm = new FormGroup({
    firstName: new FormControl('Petro', [Validators.required]),
    lastName: new FormControl('Pupkin', [Validators.required]),
    userEmail: new FormControl("example@mail.com", [
      Validators.required,
      Validators.email
    ]),
  });

  constructor() { }

  ngOnInit(): void {

  }

}

