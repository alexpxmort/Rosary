import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { SafePipe } from '../../app/safe.pipe';

import { TercoComponent } from './terco.component';

describe('TercoComponent', () => {
  let component: TercoComponent;
  let fixture: ComponentFixture<TercoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports:[
        MatIconModule,
        FlexLayoutModule
      ],
      declarations: [ TercoComponent,SafePipe ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TercoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
