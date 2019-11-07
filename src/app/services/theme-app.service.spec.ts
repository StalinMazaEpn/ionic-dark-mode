import { TestBed } from '@angular/core/testing';

import { ThemeAppService } from './theme-app.service';

describe('ThemeAppService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ThemeAppService = TestBed.get(ThemeAppService);
    expect(service).toBeTruthy();
  });
});
