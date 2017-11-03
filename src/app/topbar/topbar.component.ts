import { Component, OnInit } from '@angular/core';
import {ConnectMonthService} from '../connect-month.service';
import {Subject} from 'rxjs/Subject';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.css'],
  providers: [ConnectMonthService]
})
export class TopbarComponent implements OnInit {
  public monthIdx = 0;
  months: string[] =
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  leftRight$ = new Subject<boolean>();

  constructor(private _shareMonth: ConnectMonthService) {
    this.leftRight$.subscribe(
      data => {
        console.log(data);
        if (data) {
          this.monthIdx = ++this.monthIdx % this.months.length;
        } else {
          this.monthIdx = this.monthIdx < 1 ? this.months.length - 1 : --this.monthIdx;
        }

        this._shareMonth.publishData(this.monthIdx);
      }
    );
  }

  ngOnInit() {
  }

}
