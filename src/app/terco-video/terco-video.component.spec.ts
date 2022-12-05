import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TercoVideoComponent } from './terco-video.component';

describe('TercoVideoComponent', () => {
  let component: TercoVideoComponent;
  let fixture: ComponentFixture<TercoVideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TercoVideoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TercoVideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
