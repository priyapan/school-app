import { SchoolAppPage } from './app.po';

describe('school-app App', () => {
  let page: SchoolAppPage;

  beforeEach(() => {
    page = new SchoolAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
