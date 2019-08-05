import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiaSemanaPIComponent } from './dia-semana-pi.component';

describe('DiaSemanaPIComponent', () => {
  let component: DiaSemanaPIComponent;
  let fixture: ComponentFixture<DiaSemanaPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiaSemanaPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiaSemanaPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
