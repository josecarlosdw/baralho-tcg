import { TestBed } from '@angular/core/testing';

import { GerenciaBaralhoService } from './gerencia-baralho.service';

describe('GerenciaBaralhoService', () => {
  let service: GerenciaBaralhoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GerenciaBaralhoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
