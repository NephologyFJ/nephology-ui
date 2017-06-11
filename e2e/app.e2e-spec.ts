import { NephologyUiPage } from './app.po';

describe('nephology-ui App', () => {
  let page: NephologyUiPage;

  beforeEach(() => {
    page = new NephologyUiPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
