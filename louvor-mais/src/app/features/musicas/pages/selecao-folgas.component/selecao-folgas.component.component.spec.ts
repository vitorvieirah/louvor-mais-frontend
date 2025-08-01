import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelecaoFolgasComponentComponent } from './selecao-folgas.component.component';

describe('SelecaoFolgasComponentComponent', () => {
  let component: SelecaoFolgasComponentComponent;
  let fixture: ComponentFixture<SelecaoFolgasComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelecaoFolgasComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelecaoFolgasComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
