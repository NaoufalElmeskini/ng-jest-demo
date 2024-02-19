import {TestBed} from '@angular/core/testing';
import {BannerComponent} from './banner.component';

describe('BannerComponent (minimal)', () => {
  it('should create', () => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [BannerComponent]
    });
    const fixture = TestBed.createComponent(BannerComponent);
    const component = fixture.componentInstance;
    expect(component).toBeDefined();
  });
});
