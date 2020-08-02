# WebDriverIO
#### Documentation:-
https://webdriver.io/docs/gettingstarted.html

#### Installation of WebDriverIo
  - npm init
  - npm install --save-dev @wdio/cli
#### Choises
```
? Where is your automation backend located? On my local machine
? Which framework do you want to use? mocha
? Do you want to run WebdriverIO commands synchronous or asynchronous? sync
? Where are your test specs located? ./test/specs/**/*.js
? Do you want WebdriverIO to autogenerate some test files? Yes
? Do you want to use page objects (https://martinfowler.com/bliki/PageObject.html)? No
? Are you using a compiler? Babel (https://babeljs.io/)
? Which reporter do you want to use? spec
? Do you want to add a service to your test setup? chromedriver
? What is the base url? http://localhost
```
#### Changes on wdio.conf.js
 - Change execution folder location
 ```
 specs: [
        './main/**.js'
    ],
 ```
 ```
 // Default Running port
 port: 4444,
 ```
#### Installing Babel
```
$ npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
```
#### Run A Test Case
```
npm run testD
```

#### Assertion Methods
  - Follow Assertion Project
  
