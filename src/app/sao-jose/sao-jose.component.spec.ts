import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaoJoseComponent } from './sao-jose.component';

describe('SaoJoseComponent', () => {
  let component: SaoJoseComponent;
  let fixture: ComponentFixture<SaoJoseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaoJoseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SaoJoseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
