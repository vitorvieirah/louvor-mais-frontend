import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoMusicaComponent } from './info-musica.component';

describe('InfoMusicaComponent', () => {
  let component: InfoMusicaComponent;
  let fixture: ComponentFixture<InfoMusicaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InfoMusicaComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoMusicaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
