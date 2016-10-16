import { ReposPage } from './app.po';

describe('ToH App', function() {
  let page: ReposPage;

  beforeEach(() => {
    page = new ReposPage();
  });

  it('should display message saying Tour of Heroes', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Tour of Heroes');
  });
});
