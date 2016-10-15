import { ReposPage } from './app.po';

describe('repos App', function() {
  let page: ReposPage;

  beforeEach(() => {
    page = new ReposPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
