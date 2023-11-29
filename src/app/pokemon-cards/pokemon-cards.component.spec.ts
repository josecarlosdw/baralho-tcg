import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PokemonCardsComponent } from './pokemon-cards.component';

describe('PokemonCardsComponent', () => {
  let component: PokemonCardsComponent;
  let fixture: ComponentFixture<PokemonCardsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PokemonCardsComponent]
    });
    fixture = TestBed.createComponent(PokemonCardsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
