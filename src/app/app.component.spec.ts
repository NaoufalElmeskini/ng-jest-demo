import {AppComponent} from './app.component';

describe('first demo', () => {
  let fixture: AppComponent;

  beforeEach(() => {
    fixture = new AppComponent();
  })

  it('', () => {
    expect(true).toBeTruthy();
  })

  it('doit verifier egualite stricte ', function () {
    expect(2+2).toBe(4);
  });

  it('doit verifier equalite de fond', function () {
    expect({nom: 'ha'}).toEqual({nom: 'ha'})
  });
})
