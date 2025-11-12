import BasePage from './base.page.js';

class LoginPage extends BasePage {
    get inputUsername() { return $('#user-name'); }
    get inputPassword() { return $('#password'); }
    get btnLogin() { return $('#login-button'); }
    get errorMessage() { return $('h3[data-test="error"]'); }

    async login(username, password) {
        await this.inputUsername.setValue(username);
        await this.inputPassword.setValue(password);
        await this.btnLogin.click();
    }

    async clearInputs() {
        await this.inputUsername.clearValue();
        await this.inputPassword.clearValue();
    }
}

export default new LoginPage();
