import { Demo0816Page } from './app.po';

describe('demo0816 App', function() {
  let page: Demo0816Page;

  beforeEach(() => {
    page = new Demo0816Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
