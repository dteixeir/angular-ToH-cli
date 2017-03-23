import { TestApp2Page } from './app.po';

describe('test-app2 App', () => {
  let page: TestApp2Page;

  beforeEach(() => {
    page = new TestApp2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
