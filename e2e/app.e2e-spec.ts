import { NuevaPage } from './app.po';

describe('nueva App', function() {
  let page: NuevaPage;

  beforeEach(() => {
    page = new NuevaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
