import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-stories-commercial',
  templateUrl: './stories-commercial.component.html',
  styleUrls: ['./stories-commercial.component.scss']
})
export class StoriesCommercialComponent implements OnInit {

  testArray = new Array(6);

  constructor() { }

  ngOnInit(): void {
  }

}
