import { DLIVEPage } from './app.po';

describe('d-live App', function() {
  let page: DLIVEPage;

  beforeEach(() => {
    page = new DLIVEPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
