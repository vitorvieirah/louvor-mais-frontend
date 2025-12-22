import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NenhumaMusicaContentComponent } from './nenhuma-musica-content.component';

describe('NenhumaMusicaContentComponent', () => {
  let component: NenhumaMusicaContentComponent;
  let fixture: ComponentFixture<NenhumaMusicaContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NenhumaMusicaContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NenhumaMusicaContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
