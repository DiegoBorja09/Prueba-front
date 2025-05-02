import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusLoanComponent } from './status-loan.component';

describe('StatusLoanComponent', () => {
  let component: StatusLoanComponent;
  let fixture: ComponentFixture<StatusLoanComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusLoanComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StatusLoanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
