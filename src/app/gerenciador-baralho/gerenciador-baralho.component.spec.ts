import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GerenciadorBaralhoComponent } from './gerenciador-baralho.component';

describe('GerenciadorBaralhoComponent', () => {
  let component: GerenciadorBaralhoComponent;
  let fixture: ComponentFixture<GerenciadorBaralhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GerenciadorBaralhoComponent]
    });
    fixture = TestBed.createComponent(GerenciadorBaralhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
