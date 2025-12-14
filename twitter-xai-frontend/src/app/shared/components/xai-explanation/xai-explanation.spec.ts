import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XaiExplanation } from './xai-explanation';

describe('XaiExplanation', () => {
  let component: XaiExplanation;
  let fixture: ComponentFixture<XaiExplanation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [XaiExplanation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(XaiExplanation);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
