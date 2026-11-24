import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { Entrar } from './entrar';

describe('Entrar', () => {
  it('cria o componente', async () => {
    await TestBed.configureTestingModule({
      imports: [Entrar],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(Entrar);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
