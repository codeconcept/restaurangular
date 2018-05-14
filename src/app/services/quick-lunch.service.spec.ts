import { TestBed, inject } from '@angular/core/testing';

import { QuickLunchService } from './quick-lunch.service';

describe('QuickLunchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [QuickLunchService]
    });
  });

  it('should be created', inject([QuickLunchService], (service: QuickLunchService) => {
    expect(service).toBeTruthy();
  }));
});
