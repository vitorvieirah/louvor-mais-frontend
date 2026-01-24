import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoIntegrantesComponent } from './selecao-integrantes.component';

describe('SelecaoIntegrantesComponent', () => {
  let component: SelecaoIntegrantesComponent;
  let fixture: ComponentFixture<SelecaoIntegrantesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecaoIntegrantesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoIntegrantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
