import { Component, OnInit } from '@angular/core';
import {ConnectMonthService} from '../connect-month.service';

@Component({
  selector: 'app-days',
  templateUrl: './days.component.html',
  styleUrls: ['./days.component.css'],
  providers: [ConnectMonthService]
})
export class DaysComponent implements OnInit {
  public monthIdx = 0;
  months: string[] =
    ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];

  daysOfMonth = 31;

  jotDown: any = {};

  constructor(private _shareMonth: ConnectMonthService) {
    ConnectMonthService.caseNumber$.subscribe(
      data => {
        this.monthIdx = data;
        this.daysOfMonth = this.daysInMonth(data + 1);
      }
    );
  }

  createRange(number){
    const items: number[] = [];
    for (let i = 1; i <= number; i++){
      items.push(i);
    }
    return items;
  }

  daysInMonth(month, year = 2017) {
    return new Date(year, month, 0).getDate();
  }

  logMessage(i: number) {
    const str = this.jotDown[[this.monthIdx, i].toString()] || '';

    this.jotDown[[this.monthIdx, i].toString()] = str + '\n' + new Date().toString()  + ' - ' + window.prompt(str);
  }

  ngOnInit() {
  }

}
