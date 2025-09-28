import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MusicaInfoComponent } from './musica-info.component';

describe('MusicaInfoComponent', () => {
  let component: MusicaInfoComponent;
  let fixture: ComponentFixture<MusicaInfoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MusicaInfoComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MusicaInfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
