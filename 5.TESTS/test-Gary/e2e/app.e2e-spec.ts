import { TestGaryPage } from './app.po';

describe('test-gary App', function() {
  let page: TestGaryPage;

  beforeEach(() => {
    page = new TestGaryPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
