import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatExPanelComponent } from './mat-ex-panel.component';

describe('MatExPanelComponent', () => {
  let component: MatExPanelComponent;
  let fixture: ComponentFixture<MatExPanelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatExPanelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatExPanelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
