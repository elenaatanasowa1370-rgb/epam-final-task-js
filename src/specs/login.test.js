import { expect } from '@wdio/globals';
import LoginPage from '../../pageobjects/login.page.js';
import { log } from '../../utils/logger.js';

describe('SauceDemo Login Tests', () => {

  beforeEach(async () => {
    await LoginPage.open('');
    await browser.refresh();
    await LoginPage.clearInputs();    
});


  it('UC-1: Test Login form with empty credentials', async () => {
    log('Running UC-1: empty credentials');

    await LoginPage.open('');

    await LoginPage.inputUsername.clearValue();
    await LoginPage.inputPassword.clearValue();
    await LoginPage.btnLogin.click();

    await LoginPage.errorMessage.waitForDisplayed({ timeout: 5000 });

    const msg1 = await LoginPage.errorMessage.getText();
    if (!msg1.includes('Username is required')) {
    throw new Error(`Expected message to include "Username is required" but got: "${msg1}"`);
}
  });

  it('UC-2: Test Login form with Username only', async () => {
    log('Running UC-2: missing password');
    await LoginPage.inputUsername.setValue('standard_user');
    await LoginPage.inputPassword.clearValue();
    await LoginPage.btnLogin.click();

    const errorText = await LoginPage.errorMessage.getText();

    if (!errorText.includes('Password is required')) {
    throw new Error(`Expected message to include "Password is required" but got: "${errorText}"`);
    }
  });

  it('UC-3: Test Login form with valid Username and Password', async () => {
    log('Running UC-3: valid login');
    await LoginPage.login('standard_user', 'secret_sauce');

    await expect(browser).toHaveTitle('Swag Labs');
    log('UC-3 passed: Successful login verified.');
  });
});
