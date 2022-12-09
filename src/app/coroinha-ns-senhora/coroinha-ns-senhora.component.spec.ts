import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoroinhaNsSenhoraComponent } from './coroinha-ns-senhora.component';

describe('CoroinhaNsSenhoraComponent', () => {
  let component: CoroinhaNsSenhoraComponent;
  let fixture: ComponentFixture<CoroinhaNsSenhoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoroinhaNsSenhoraComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CoroinhaNsSenhoraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
