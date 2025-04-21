import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListagemMusicasComponent } from './listagem-musicas-component.component';

describe('ListagemMusicasComponent', () => {
  let component: ListagemMusicasComponent;
  let fixture: ComponentFixture<ListagemMusicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListagemMusicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListagemMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
