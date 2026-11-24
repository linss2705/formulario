import { TestBed } from '@angular/core/testing';
import { provideHttpClient } from '@angular/common/http';
import { provideRouter } from '@angular/router';
import { Perfil } from './perfil';

describe('Perfil', () => {
  it('cria o componente', async () => {
    await TestBed.configureTestingModule({
      imports: [Perfil],
      providers: [provideHttpClient(), provideRouter([])],
    }).compileComponents();

    const fixture = TestBed.createComponent(Perfil);
    expect(fixture.componentInstance).toBeTruthy();
  });
});
