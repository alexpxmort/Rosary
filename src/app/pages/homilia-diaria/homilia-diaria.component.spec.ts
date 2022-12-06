import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomiliaDiariaComponent } from './homilia-diaria.component';

describe('HomiliaDiariaComponent', () => {
  let component: HomiliaDiariaComponent;
  let fixture: ComponentFixture<HomiliaDiariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomiliaDiariaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomiliaDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
