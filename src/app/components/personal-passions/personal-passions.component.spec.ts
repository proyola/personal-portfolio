import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PersonalPassionsComponent } from './personal-passions.component';

describe('PersonalPassionsComponent', () => {
  let component: PersonalPassionsComponent;
  let fixture: ComponentFixture<PersonalPassionsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PersonalPassionsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PersonalPassionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
