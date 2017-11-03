import { TestBed, inject } from '@angular/core/testing';

import { ConnectMonthService } from './connect-month.service';

describe('ConnectMonthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectMonthService]
    });
  });

  it('should be created', inject([ConnectMonthService], (service: ConnectMonthService) => {
    expect(service).toBeTruthy();
  }));
});
