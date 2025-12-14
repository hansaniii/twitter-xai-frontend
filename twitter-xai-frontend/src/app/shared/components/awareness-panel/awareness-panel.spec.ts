import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AwarenessPanel } from './awareness-panel';

describe('AwarenessPanel', () => {
  let component: AwarenessPanel;
  let fixture: ComponentFixture<AwarenessPanel>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AwarenessPanel]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AwarenessPanel);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
