import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageresellerComponent } from './managereseller.component';

describe('ManageresellerComponent', () => {
  let component: ManageresellerComponent;
  let fixture: ComponentFixture<ManageresellerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageresellerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageresellerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
