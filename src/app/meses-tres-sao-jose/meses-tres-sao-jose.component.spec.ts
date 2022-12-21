import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MesesTresSaoJoseComponent } from './meses-tres-sao-jose.component';

describe('MesesTresSaoJoseComponent', () => {
  let component: MesesTresSaoJoseComponent;
  let fixture: ComponentFixture<MesesTresSaoJoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MesesTresSaoJoseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MesesTresSaoJoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
