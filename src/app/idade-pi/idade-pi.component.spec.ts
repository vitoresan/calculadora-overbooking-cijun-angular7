import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IdadePIComponent } from './idade-pi.component';

describe('IdadePIComponent', () => {
  let component: IdadePIComponent;
  let fixture: ComponentFixture<IdadePIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IdadePIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IdadePIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
