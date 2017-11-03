import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.css']
})
export class DayComponent implements OnInit {
  @Input() text: string;

  constructor() { }

  ngOnInit() {
  }

}
