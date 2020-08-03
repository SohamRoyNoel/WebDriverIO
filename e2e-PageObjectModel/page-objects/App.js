class App {
    openHomePage() {
        browser.url('http://zero.webappsecurity.com/index.html');
    }

    // universal Logout URl System
    Logout(){
        browser.url('http://zero.webappsecurity.com/logout.html');
    }
}

export default new App();
