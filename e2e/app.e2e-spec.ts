import { GithupsearchPage } from './app.po';

describe('githupsearch App', () => {
  let page: GithupsearchPage;

  beforeEach(() => {
    page = new GithupsearchPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
