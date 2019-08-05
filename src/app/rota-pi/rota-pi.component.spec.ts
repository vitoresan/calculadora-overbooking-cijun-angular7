import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RotaPIComponent } from './rota-pi.component';

describe('RotaPIComponent', () => {
  let component: RotaPIComponent;
  let fixture: ComponentFixture<RotaPIComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RotaPIComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RotaPIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
