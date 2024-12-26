import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chap2Component } from './chap2.component';

describe('Chap2Component', () => {
  let component: Chap2Component;
  let fixture: ComponentFixture<Chap2Component>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [Chap2Component]
    });
    fixture = TestBed.createComponent(Chap2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
