import { TestBed } from '@angular/core/testing';

import { ListaCartasService } from './lista-cartas.service';

describe('ListaCartasService', () => {
  let service: ListaCartasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ListaCartasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
