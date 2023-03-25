import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { environment } from '../../../environment';
import { SafePipe } from '../../safe.pipe';

import { HomiliaDiariaComponent } from './homilia-diaria.component';

describe('HomiliaDiariaComponent', () => {
  let component: HomiliaDiariaComponent;
  let fixture: ComponentFixture<HomiliaDiariaComponent>;
  let httpMock: HttpTestingController;


  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HomiliaDiariaComponent,SafePipe ],
      imports:[
        HttpClientTestingModule
      ],
      providers: [
        { provide: environment, useValue: { LINK_HOMILIA: 'http://example.com', API_YOUTUBE: 'http://youtube.com/' } }
      ]
    })
    .compileComponents();
    httpMock = TestBed.inject(HttpTestingController);
    fixture = TestBed.createComponent(HomiliaDiariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
