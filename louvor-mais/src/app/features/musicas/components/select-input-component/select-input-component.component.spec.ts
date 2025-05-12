import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectInputComponentComponent } from './select-input-component.component';

describe('SelectInputComponentComponent', () => {
  let component: SelectInputComponentComponent;
  let fixture: ComponentFixture<SelectInputComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectInputComponentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SelectInputComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
