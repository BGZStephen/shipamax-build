import { ShipmaxPage } from './app.po';

describe('shipmax App', () => {
  let page: ShipmaxPage;

  beforeEach(() => {
    page = new ShipmaxPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
