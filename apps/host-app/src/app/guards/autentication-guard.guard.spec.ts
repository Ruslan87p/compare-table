import { TestBed } from '@angular/core/testing';

import { AutenticationGuardGuard } from './autentication-guard.guard';

describe('AutenticationGuardGuard', () => {
  let guard: AutenticationGuardGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AutenticationGuardGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
