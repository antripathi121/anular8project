import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MatGridlistComponent } from './mat-gridlist.component';

describe('MatGridlistComponent', () => {
  let component: MatGridlistComponent;
  let fixture: ComponentFixture<MatGridlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatGridlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MatGridlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
