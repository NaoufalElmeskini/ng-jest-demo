import {ComponentFixture, TestBed} from '@angular/core/testing';
import {BannerComponent} from './banner.component';

describe('BannerComponent (minimal)', () => {
  let component: BannerComponent;
  let fixture: ComponentFixture<BannerComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      declarations: [BannerComponent]
    });
    fixture = TestBed.createComponent(BannerComponent);

    component = fixture.componentInstance;
  });



  it('should create', () => {

    expect(component).toBeDefined();
  });

  it('doit recuperer element html', function () {
    const bannerElement: HTMLElement = fixture.nativeElement;
    const bannerParagraph = bannerElement.querySelector('p')!;
    expect(bannerParagraph.textContent).toEqual(' banner works! ')
  });
});
