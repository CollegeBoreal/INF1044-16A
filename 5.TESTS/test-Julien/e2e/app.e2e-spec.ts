import { TestJulienPage } from './app.po';

describe('test-julien App', function() {
  let page: TestJulienPage;

  beforeEach(() => {
    page = new TestJulienPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
