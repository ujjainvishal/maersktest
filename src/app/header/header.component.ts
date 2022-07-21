import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9]
  constructor(public _data: DataService) { }
  name="Vishal Ujjain";
  ngOnInit(): void {

  }
  shuffle() {
    this.numArray = this.numArray.sort((a, b) => 0.5 - Math.random())
  }
  sort() {
    this.numArray.sort((a, b) => {
      if (a > b)
        return 1;
      else if (a < b)
        return -1;
      else
        return 0;
    })
  }
}
