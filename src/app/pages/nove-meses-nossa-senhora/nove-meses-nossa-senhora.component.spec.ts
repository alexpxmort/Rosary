import { TestBed } from "@angular/core/testing";
import { HttpClientTestingModule,HttpTestingController } from "@angular/common/http/testing";
import { environment } from "../../../environment";
import { NoveMesesNossaSenhoraComponent } from "./nove-meses-nossa-senhora.component";

describe('NoveMesesNossaSenhoraComponent', () => {
  let component: NoveMesesNossaSenhoraComponent;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      declarations: [NoveMesesNossaSenhoraComponent],
      providers: []
    }).compileComponents();

    httpMock = TestBed.inject(HttpTestingController);
    component = TestBed.createComponent(NoveMesesNossaSenhoraComponent).componentInstance;
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should get current link', () => {
    const mockResponse = { code: 'abc123' };

    component.getCurrentLink().subscribe((response) => {
      expect(response).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(`${environment.API_YOUTUBE}nove-meses-nossa-senhora`);
    expect(req.request.method).toBe('GET');
    req.flush(mockResponse);
  });
});
