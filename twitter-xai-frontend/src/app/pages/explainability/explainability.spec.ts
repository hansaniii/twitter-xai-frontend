import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Explainability } from './explainability';

describe('Explainability', () => {
  let component: Explainability;
  let fixture: ComponentFixture<Explainability>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Explainability]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Explainability);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
