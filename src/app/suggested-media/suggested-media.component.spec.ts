import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuggestedMediaComponent } from './suggested-media.component';

describe('SuggestedMediaComponent', () => {
  let component: SuggestedMediaComponent;
  let fixture: ComponentFixture<SuggestedMediaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuggestedMediaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuggestedMediaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
