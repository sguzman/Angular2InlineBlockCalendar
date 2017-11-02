import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css']
})
export class TopbarComponent implements OnInit {
  public monthIdx: number = 0;
  public months: string[] = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor() {}

  public decre() {
    this.monthIdx = (this.monthIdx + 1) % this.months.length;
  }

  public incre() {
    if (this.monthIdx === 0) {
      this.monthIdx = this.months.length - 1;
    } else {
      this.monthIdx = (this.monthIdx - 1) % this.months.length;
    }
  }

  ngOnInit() {
  }

}
