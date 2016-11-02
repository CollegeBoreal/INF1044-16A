import { TestBricePage } from './app.po';

describe('test-brice App', function() {
  let page: TestBricePage;

  beforeEach(() => {
    page = new TestBricePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
