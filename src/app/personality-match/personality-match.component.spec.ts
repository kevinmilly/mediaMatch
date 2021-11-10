import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalityMatchComponent } from './personality-match.component';

describe('PersonalityMatchComponent', () => {
  let component: PersonalityMatchComponent;
  let fixture: ComponentFixture<PersonalityMatchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PersonalityMatchComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalityMatchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
