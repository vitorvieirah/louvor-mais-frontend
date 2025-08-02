import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResumoSetlistComponent } from './resumo-setlist.component';

describe('ResumoSetlistComponent', () => {
  let component: ResumoSetlistComponent;
  let fixture: ComponentFixture<ResumoSetlistComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ResumoSetlistComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ResumoSetlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
