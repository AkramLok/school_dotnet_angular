import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap3Component } from './chap3.component';

describe('Chap3Component', () => {
  let component: Chap3Component;
  let fixture: ComponentFixture<Chap3Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chap3Component]
    });
    fixture = TestBed.createComponent(Chap3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
