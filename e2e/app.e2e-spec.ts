import { HughExamPage } from './app.po';

describe('hugh-exam App', () => {
  let page: HughExamPage;

  beforeEach(() => {
    page = new HughExamPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
