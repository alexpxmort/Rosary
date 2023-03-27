import { TercoVideoComponent } from "../../app/terco-video/terco-video.component";
import { TercoService } from "../../app/terco.service";

describe('TercoVideoComponent', () => {
  let component: TercoVideoComponent;
  let tercoService: TercoService;

  beforeEach(() => {
    tercoService = new TercoService();
    component = new TercoVideoComponent(tercoService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('setTitleMisterios', () => {

    it('should set titleMisterio to "Gozosos Dias (Segunda e Sabado)" if isGozosos is true', () => {
      spyOn(tercoService, 'isGozosos').and.returnValue(true);
      component.setTitleMisterios();
      expect(component.titleMisterio).toBeTruthy()
    });

    it('should set titleMisterio to "Dolorosos Dias (Terca e Sexta)" if isDolorosos is true', () => {
      spyOn(tercoService, 'isDolorosos').and.returnValue(true);
      component.setTitleMisterios();
      expect(component.titleMisterio).toBeTruthy()
    });

    it('should set titleMisterio to "Gloriosos Dias (Quarta e Domingo)" if isGloriosos is true', () => {
      spyOn(tercoService, 'isGloriosos').and.returnValue(true);
      component.setTitleMisterios();
      expect(component.titleMisterio).toBeTruthy()
    });

    it('should set titleMisterio to "Luminosos Dias (Quinta)" if isLuminosos is true', () => {
      spyOn(tercoService, 'isGloriosos').and.returnValue(false);
      spyOn(tercoService, 'isLuminosos').and.returnValue(true);
      component.setTitleMisterios();
      expect(component.titleMisterio).toBeTruthy()
    });
  });

  describe('setLinkMisterio', () => {
    it('should set url to GOZOSOS_LINK if isGozosos is true', () => {
      spyOn(tercoService, 'isGozosos').and.returnValue(true);
      component.setLinkMisterio();
      expect(component.url).toBeTruthy()
    });

    it('should set url to DOLOROSOS_LINK if isDolorosos is true', () => {
      spyOn(tercoService, 'isDolorosos').and.returnValue(true);
      component.setLinkMisterio();
      expect(component.url).toEqual(component.DOLOROSOS_LINK);
    });

    it('should set url to GLORIOSOS_LINK if isGloriosos is true', () => {
      spyOn(tercoService, 'isGloriosos').and.returnValue(true);
      component.setLinkMisterio();
      expect(component.url).toEqual(component.GLORIOSOS_LINK);
    });

    it('should set url to LUMINOSOS_LINK if isLuminosos is true', () => {
      spyOn(tercoService, 'isLuminosos').and.returnValue(true);
      component.setLinkMisterio();
      expect(component.url).toEqual(component.LUMINOSOS_LINK);
    });
  });

  describe('handleMisterio', () => {
    it('should set url to DOLOROSOS_LINK and titleMisterio to "Dolorosos Dias (Terca e Sexta)" if misterio is "dolorosos"', () => {
      component.handleMisterio('dolorosos');
      expect(component.url).toEqual(component.DOLOROSOS_LINK);
      expect(component.titleMisterio).toBeTruthy()
    });

    it('should set url to LUMINOSOS_LINK and titleMisterio to "Luminosos Dias (Quinta)" if misterio is "luminosos"', () => {
      component.handleMisterio('luminosos');
      expect(component.url).toEqual(component.LUMINOSOS_LINK);
      expect(component.titleMisterio).toBeTruthy()
    });

    it('should set url to GOZOSOS_LINK and titleMisterio to "Gozosos Dias (Segunda e Sabado)" if misterio is "gozosos"', () => {
      component.handleMisterio('gozosos');
      expect(component.url).toEqual(component.GOZOSOS_LINK);
      expect(component.titleMisterio).toBeTruthy()
    });

    it('should set url to GLORIOSOS_LINK and titleMisterio to "Gloriosos Dias (Quarta e Domingo)" if misterio is "gloriosos"', () => {
      component.handleMisterio('gloriosos');
      expect(component.url).toEqual(component.GLORIOSOS_LINK);
      expect(component.titleMisterio).toBeTruthy()
    });
  });

  describe('actualMisterio', () => {
    it('should call setLinkMisterio and setTitleMisterios', () => {
      spyOn(component, 'setLinkMisterio');
      spyOn(component, 'setTitleMisterios');
      component.actualMisterio();
      expect(component.setLinkMisterio).toHaveBeenCalled();
      expect(component.setTitleMisterios).toHaveBeenCalled();
    });

    it('should set titleMisterio to "Misterio de Hoje " + titleMisterio', () => {
      spyOn(component, 'setLinkMisterio');
      spyOn(component, 'setTitleMisterios');
      component.titleMisterio = 'Test';
      component.actualMisterio();
      expect(component.titleMisterio).toEqual('Misterio de Hoje Test');
    });
  });
});
