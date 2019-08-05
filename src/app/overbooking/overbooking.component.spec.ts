import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OverbookingComponent } from './overbooking.component';

describe('OverbookingComponent', () => {
  let component: OverbookingComponent;
  let fixture: ComponentFixture<OverbookingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OverbookingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OverbookingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
