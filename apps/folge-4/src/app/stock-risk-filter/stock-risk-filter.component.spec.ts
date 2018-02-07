import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StockRiskFilterComponent } from './stock-risk-filter.component';

describe('StockRiskFilterComponent', () => {
  let component: StockRiskFilterComponent;
  let fixture: ComponentFixture<StockRiskFilterComponent>;

  beforeEach(
    async(() => {
      TestBed.configureTestingModule({
        declarations: [StockRiskFilterComponent]
      }).compileComponents();
    })
  );

  beforeEach(() => {
    fixture = TestBed.createComponent(StockRiskFilterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
