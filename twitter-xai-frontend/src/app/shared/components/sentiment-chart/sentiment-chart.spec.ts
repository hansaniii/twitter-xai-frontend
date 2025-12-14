import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentChart } from './sentiment-chart';

describe('SentimentChart', () => {
  let component: SentimentChart;
  let fixture: ComponentFixture<SentimentChart>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SentimentChart]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SentimentChart);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
