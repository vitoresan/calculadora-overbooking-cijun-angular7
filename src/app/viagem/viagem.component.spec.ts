import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViagemComponent } from './viagem.component';

describe('ViagemComponent', () => {
  let component: ViagemComponent;
  let fixture: ComponentFixture<ViagemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViagemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
