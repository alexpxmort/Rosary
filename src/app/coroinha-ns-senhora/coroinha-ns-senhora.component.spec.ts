import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SafePipe } from '../safe.pipe';

import { CoroinhaNsSenhoraComponent } from './coroinha-ns-senhora.component';

describe('CoroinhaNsSenhoraComponent', () => {
  let component: CoroinhaNsSenhoraComponent;
  let fixture: ComponentFixture<CoroinhaNsSenhoraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoroinhaNsSenhoraComponent,SafePipe ]
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
