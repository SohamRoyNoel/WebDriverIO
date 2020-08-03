import Base from '../Base';

class NavBar extends Base {

    get loginForm(){
        return $('#signin_button');
    }
    doSignInClick(){
        this.loginForm.click();
    }

    // help Page models
    get Settings(){
        return $('.icon-cog');
    }
    get Help(){
        return $('#help_link');
    }
    // Belongs to HelpPage
    get Pertiallink(){
        return $('*=transfer');
    }

    clickSettings() {
        this.Settings.click();
    }
    clickHelp() {
        this.Help.click();
    }
    clickPertialLink() {
        this.Pertiallink.click();
    }
    callToCallAll_3_ActionsAbove(){
        this.clickSettings();
        this.clickHelp();
        this.clickPertialLink();
    }

    // Searchbox
    get searchBox(){
        return $('#searchTerm');
    }
    RedirectToLink(setterText) {
        this.searchBox.setValue(setterText);
    }

    // FeedBack
    get feedback(){
        return $('#feedback');
    }
    Redirectfeedback() {
        this.feedback.click();
    }
    

}

export default new NavBar()