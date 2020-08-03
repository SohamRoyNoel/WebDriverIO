import Base from '../Base'

class LoginPage extends Base {
    get loginForm(){
        return $('//*[@id="login_form"]/div[1]');
    }
    get usernameInput(){
        return $('#user_login');
    }
    get passwordInput(){
        return $('#user_password');
    }
    get submitButton(){
        return $('//*[@name="submit"]');
    }

    get errorIdentifier(){
        return $('//*[@id="login_form"]/div[1]');
    }

    fillTheForm(userName, password) {
        this.usernameInput.setValue(userName);
        this.passwordInput.setValue(password);
    }

    submitTheForm(){
        this.submitButton.click();
    }

    identifyError(){
        expect(this.errorIdentifier).toHaveText('Login and/or password are wrong.');
    }
}

export default new LoginPage();