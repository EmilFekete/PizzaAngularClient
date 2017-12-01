import { PizzaWebAppPage } from './app.po';

describe('pizza-web-app App', () => {
  let page: PizzaWebAppPage;

  beforeEach(() => {
    page = new PizzaWebAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
