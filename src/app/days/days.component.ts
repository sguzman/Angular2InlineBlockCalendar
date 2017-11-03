import { Component, OnInit } from '@angular/core';
import {ConnectMonthService} from '../connect-month.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css'],
  providers: [ConnectMonthService]
})
export class DaysComponent implements OnInit {
  public monthIdx: number = 0;
  months: string[] =
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  constructor(private _shareMonth: ConnectMonthService) {
    ConnectMonthService.caseNumber$.subscribe(
      data => {
        console.log(`Receiving data in days component: ${data}`);
        this.monthIdx = data;
      }
    );
  }

  daysInMonth(month, year = 2017) {
    return new Date(year, month, 0).getDate();
  }

  ngOnInit() {
  }

}
