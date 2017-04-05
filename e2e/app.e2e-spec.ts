import { ResumePage } from './app.po';

describe('resume App', () => {
  let page: ResumePage;

  beforeEach(() => {
    page = new ResumePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
