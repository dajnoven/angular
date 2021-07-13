import { Component, OnInit } from '@angular/core';

interface Tech {
  value: string;
  viewValue: string;
}

interface FrameWork {
  value: string;
  viewValue: string;
}




@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.css']
})
export class SelectComponent implements OnInit {

  techs: Tech[] = [
    {value: 'none-0', viewValue: 'Не выбрано'},
    {value: 'angular-1', viewValue: 'Angular'},
    {value: 'react-2', viewValue: 'React'},
    {value: 'vue-3', viewValue: 'Vue'}
  ];

  frameWorks: FrameWork[] = [
    {value: 'none-0', viewValue: 'Не выбрано'},
    {value: 'angular-1', viewValue: 'angular: [1.1.1, 9;1.2.1, 1.3.3]'},
    {value: 'react-2', viewValue: 'react: [2.1.2, 3.2.4, 4.3.1]'},
    {value: 'vue-3', viewValue: 'vue: [3.3.1, 5.2.1, 5.1.3]'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
