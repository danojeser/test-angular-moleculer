import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-doctors-commercial',
  templateUrl: './doctors-commercial.component.html',
  styleUrls: ['./doctors-commercial.component.scss']
})
export class DoctorsCommercialComponent implements OnInit {

  arrayTest = new Array(7);

  constructor() { }

  ngOnInit(): void {
  }

}
