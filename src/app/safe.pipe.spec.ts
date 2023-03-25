import { DomSanitizer } from "@angular/platform-browser";
import { SafePipe } from "./safe.pipe";

describe('SafePipe', () => {
  let pipe: SafePipe;
  let domSanitizer: DomSanitizer;

  beforeEach(() => {
    domSanitizer = jasmine.createSpyObj('DomSanitizer', ['bypassSecurityTrustResourceUrl']);
    pipe = new SafePipe(domSanitizer);
  });

  it('should create an instance', () => {
    expect(pipe).toBeTruthy();
  });

  it('should call DomSanitizer.bypassSecurityTrustResourceUrl with the given url', () => {
    const url = 'https://example.com';
    pipe.transform(url);
    expect(domSanitizer.bypassSecurityTrustResourceUrl).toHaveBeenCalledWith(url);
  });
});
