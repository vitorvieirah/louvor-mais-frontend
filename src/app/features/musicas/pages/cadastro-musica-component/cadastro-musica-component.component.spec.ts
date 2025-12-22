import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastroMusicaComponentComponent } from './cadastro-musica-component.component';

describe('CadastroMusicaComponentComponent', () => {
  let component: CadastroMusicaComponentComponent;
  let fixture: ComponentFixture<CadastroMusicaComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CadastroMusicaComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CadastroMusicaComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
