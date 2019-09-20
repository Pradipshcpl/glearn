import { TestBed } from '@angular/core/testing';

import { ContractorserviceService } from './contractorservice.service';

describe('ContractorserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ContractorserviceService = TestBed.get(ContractorserviceService);
    expect(service).toBeTruthy();
  });
});
