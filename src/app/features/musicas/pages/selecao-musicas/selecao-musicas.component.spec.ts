import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoMusicasComponent } from './selecao-musicas.component';

describe('SelecaoMusicasComponent', () => {
  let component: SelecaoMusicasComponent;
  let fixture: ComponentFixture<SelecaoMusicasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecaoMusicasComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoMusicasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
