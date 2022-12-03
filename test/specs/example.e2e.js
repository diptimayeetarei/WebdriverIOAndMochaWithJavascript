const reportportal = require('wdio-reportportal-reporter');
const loginPage = require('../pageobjects/login.page');
const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('tomsmith', 'SuperSecretPassword!');
        await expect(SecurePage.flashAlert).toBeExisting();
        await expect(SecurePage.flashAlert).toHaveTextContaining(
            'You logged into a secure area!');
            reportportal.sendLog('info',`execution sucessfully completed`)
            reportportal.sendLog('error', `ERROR: locatorname is not clickable | Reason: CAUGHT ERROR`);
    });
    it('should verify the page after login', async () => {
        await loginPage.elementDisplay()
    });
});