import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LineChartNgxComponent } from './line-chart-ngx.component';

describe('LineChartNgxComponent', () => {
  let component: LineChartNgxComponent;
  let fixture: ComponentFixture<LineChartNgxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LineChartNgxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LineChartNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
