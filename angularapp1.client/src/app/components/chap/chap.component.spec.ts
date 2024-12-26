import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChapComponent } from './chap.component';

describe('ChapComponent', () => {
  let component: ChapComponent;
  let fixture: ComponentFixture<ChapComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ChapComponent]
    });
    fixture = TestBed.createComponent(ChapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
