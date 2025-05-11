import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsCadastroMusicaComponent } from './forms-cadastro-musica.component';

describe('FormsCadastroMusicaComponent', () => {
  let component: FormsCadastroMusicaComponent;
  let fixture: ComponentFixture<FormsCadastroMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormsCadastroMusicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormsCadastroMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
