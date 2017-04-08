import { BankrollBetTrackerPage } from './app.po';

describe('bankroll-bet-tracker App', () => {
  let page: BankrollBetTrackerPage;

  beforeEach(() => {
    page = new BankrollBetTrackerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
