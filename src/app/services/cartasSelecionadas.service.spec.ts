import { TestBed } from '@angular/core/testing';

import { CartasselecionadasService } from './cartasselecionadas.service';

describe('CartasselecionadasService', () => {
  let service: CartasselecionadasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartasselecionadasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
