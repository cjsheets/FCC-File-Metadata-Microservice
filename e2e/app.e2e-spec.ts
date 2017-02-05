import { AngularCliMinPage } from './app.po';

describe('angular-cli-min App', function() {
  let page: AngularCliMinPage;

  beforeEach(() => {
    page = new AngularCliMinPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
