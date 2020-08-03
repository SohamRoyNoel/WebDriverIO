class FeedBack{

    get loginForm(){
        return $('#feedback-title');
    }
    doValidateName(){
        this.loginForm.waitForExist();
        expect(this.loginForm).toHaveText('Feedback');
    }

    get Name(){
        return $('#name');
    }
    get Email(){
        return $('#email');
    }
    get Subject(){
        return $('#subject');
    }
    get Comment(){
        return $('#comment');
    }
    get Submit(){
        return $('//*[@name="submit"]');
    }

    sendFeedback(nameIp, emailIp,subjectIp, commentIp){
        this.Name.setValue(nameIp);
        this.Email.setValue(emailIp);
        this.Subject.setValue(subjectIp);
        this.Comment.setValue(commentIp);
        this.Submit.click();
    }

}

export default new FeedBack();