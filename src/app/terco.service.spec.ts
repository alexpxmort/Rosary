import { TestBed } from "@angular/core/testing";
import { of } from "rxjs";
import {TercoService } from "./terco.service";

describe('TercoService', () => {
  let service: TercoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TercoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('getDayMisterios', () => {
    it('should return DOLOROSOS_MISTERIOS when isDolorosos is true', () => {
      spyOn(service, 'isDolorosos').and.returnValue(true);
      const result = service.getDayMisterios();
      result.subscribe(misterios => {
        expect(misterios).toBeTruthy()
      });
    });

    it('should return LUMINOSOS_MISTERIOS when isLuminosos is true', () => {
      spyOn(service, 'isLuminosos').and.returnValue(true);
      const result = service.getDayMisterios();
      result.subscribe(misterios => {
        expect(misterios).toBeTruthy()
      });
    });

    it('should return GLORIOSOS_MISTERIOS when isGloriosos is true', () => {
      spyOn(service, 'isGloriosos').and.returnValue(true);
      const result = service.getDayMisterios();
      result.subscribe(misterios => {
        expect(misterios).toEqual(service.GLORIOSOS_MISTERIOS);
      });
    });

    it('should return GOZOSOS_MISTERIOS when isGozosos is true', () => {
      spyOn(service, 'isGozosos').and.returnValue(true);
      const result = service.getDayMisterios();
      result.subscribe(misterios => {
        expect(misterios).toBeTruthy()
      });
    });

    it('should return an empty array when none of the conditions are met', () => {
      spyOn(service, 'isDolorosos').and.returnValue(false);
      spyOn(service, 'isLuminosos').and.returnValue(false);
      spyOn(service, 'isGloriosos').and.returnValue(false);
      spyOn(service, 'isGozosos').and.returnValue(false);
      const result = service.getDayMisterios();
      result.subscribe(misterios => {
        expect(misterios).toEqual([]);
      });
    });
  });

  describe('getMisterioByOrder', () => {
    it('should return the misterio with the given order', () => {
      const order = 2;
      const expectedMisterio = service.DOLOROSOS_MISTERIOS[order-1];
      spyOn(service, 'getDayMisterios').and.returnValue(of(service.DOLOROSOS_MISTERIOS));
      const result = service.getMisterioByOrder(order);
      result.subscribe(misterio => {
        expect(misterio).toEqual(expectedMisterio);
      });
    });
  });

  describe('isGozosos', () => {
    it('should return true when the current day is in DAYS_GOZOSOS', () => {
      service.setDate(new Date(2021, 3, 3))
      expect(service.isGozosos()).toBeTrue();
    });

    it('should return false when the current day is not in DAYS_GOZOSOS', () => {
      service.setDate(new Date(2021, 8, 2))

      expect(service.isGozosos()).toBeFalse();
    });
  });

  describe('isLuminosos', () => {
    it('should return true when the current day is in DAY_LUMINOSOS', () => {
      service.setDate(new Date(2021, 8, 2))

      expect(service.isLuminosos()).toBeTrue();
    });

    it('should return false when the current day is not in DAY_LUMINOSOS', () => {
      service.setDate(new Date(2021, 9, 2))
      expect(service.isLuminosos()).toBeFalse();
    });
  });

  describe('isGloriosos', () => {
    it('should return true when the current day is in DAY_GLORIOSOS', () => {
      service.setDate(new Date(2021, 3, 4))

      expect(service.isGloriosos()).toBeTrue();
    });

    it('should return false when the current day is not in DAY_GLORIOSOS', () => {
      service.setDate(new Date(2021, 8, 2))

      expect(service.isGloriosos()).toBeFalse();
    });
  });

  describe('isDolorosos', () => {
    it('should return true when the current day is in DAY_DOLOROSOS', () => {
      service.setDate(new Date(2021, 3, 2))

      expect(service.isDolorosos()).toBeTrue();
    });

    it('should return false when the current day is not in DAY_DOLOROSOS', () => {
      service.setDate(new Date(2021, 8, 1))

      expect(service.isDolorosos()).toBeFalse();
    });
  });

  describe('getPrayer', () => {
    it('should return the prayer object', () => {
      const result = service.getPrayer();
      result.subscribe(prayer => {
        expect(prayer).toBeTruthy()
      });
    });
  });
});
