import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyInfoBoxComponent } from './company-info-box.component';

describe('CompanyInfoBoxComponent', () => {
  let component: CompanyInfoBoxComponent;
  let fixture: ComponentFixture<CompanyInfoBoxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompanyInfoBoxComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyInfoBoxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
