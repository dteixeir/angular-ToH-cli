import { browser, element, by } from 'protractor';

export class ReposPage {
  navigateTo() {
    return browser.get('/dashboard');
  }

  getParagraphText() {
    return element(by.css('app-main h1')).getText();
  }
}
