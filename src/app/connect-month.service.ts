import { Injectable } from '@angular/core';
import {Subject} from 'rxjs/Subject';

@Injectable()
export class ConnectMonthService {
  // Observable string sources
  public static caseNumber$ = new Subject<number>();

  // Service message commands
  public publishData(data: number) {
    ConnectMonthService.caseNumber$.next(data);
  }
}
