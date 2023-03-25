import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SafePipe } from '../../safe.pipe';

import { RosarioComponent } from './rosario.component';

describe('RosarioComponent', () => {
  let component: RosarioComponent;
  let fixture: ComponentFixture<RosarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RosarioComponent,SafePipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RosarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
