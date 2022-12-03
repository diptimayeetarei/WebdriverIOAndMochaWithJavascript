
const reportportal = require('wdio-reportportal-reporter');
const Page = require('./page');

/**
 * sub page containing specific selectors and methods for a specific page
 */
class LoginPage extends Page {
    /**
     * define selectors using getter methods
     */
    get inputUsername() {
        return $('#username');
    }

    get inputPassword() {
        return $('#password');
    }

    get btnSubmit() {
        return $('button[type="submit"]');
    }
    get flashMessage() {
        return $(`.flash`)
    }

    /**
     * a method to encapsule automation code to interact with the page
     * e.g. to login using username and password
     */
    // async login (username, password) {
    //     await this.inputUsername.setValue(username);
    //     await this.inputPassword.setValue(password);
    //     await this.btnSubmit.click();
    // }
    async login(username, password) {
        try {
            await this.inputUsername.setValue(username);
            reportportal.sendLog('info', `In Element value entered successfully!`);
        }
        catch (error) {
            reportportal.sendLog('error', `In this ${error} element value not entered ! | Reason: ${error}`);
            throw new Error(`Unable to select the ${error} element  | Reason: ${error}`);
        }
        await this.inputPassword.setValue(password);
        await this.btnSubmit.click();
    }
    /**
     * overwrite specific options to adapt it to page object
     */
    open() {
        return super.open('login');
    }
    async elementDisplay() {
        await this.flashMessage.waitForDisplayed({ timeout: 3000 })
    }
}

module.exports = new LoginPage();
