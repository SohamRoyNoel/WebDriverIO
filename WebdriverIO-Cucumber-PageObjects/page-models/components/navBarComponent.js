class navBarComponent {
    get loginForm(){
        return $('#signin_button');
    }
    doSignInClick(){
        this.loginForm.click();
    }
}

export default new navBarComponent();
