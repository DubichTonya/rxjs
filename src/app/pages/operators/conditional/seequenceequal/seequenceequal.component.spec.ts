import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeequenceequalComponent } from './seequenceequal.component';

describe('SeequenceequalComponent', () => {
  let component: SeequenceequalComponent;
  let fixture: ComponentFixture<SeequenceequalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeequenceequalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeequenceequalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
