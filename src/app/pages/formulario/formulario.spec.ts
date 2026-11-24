import { TestBed } from '@angular/core/testing';
import { Formulario } from './formulario';

describe('Formulario', () => {
  it('should create', () => {
    TestBed.configureTestingModule({});
    const fixture = TestBed.createComponent(Formulario);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
