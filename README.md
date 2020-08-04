# WebDriverIO
#### Documentation:-
https://webdriver.io/docs/gettingstarted.html

#### Practice Resources
  - http://www.example.com/
  - https://devexpress.github.io/testcafe/example/
  - http://zero.webappsecurity.com/index.html

#### Installation of WebDriverIo
  - npm init
  - npm install --save-dev @wdio/cli
  - npx wdio config
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
 reporters: ['spec'],
 port: 4444,
 ```
#### Installing Babel
```
$ npm install --save-dev @babel/core @babel/cli @babel/preset-env @babel/register
```
#### Babel Configuration file creation
  - Create a file called ```babel.config.js```
  - Copy the below content: this resolves Babel configuration issue
  ```
  module.exports = {
    presets: [
        [
            '@babel/preset-env',
            {
                targets: {
                    node: 12,
                },
            },
        ],
    ],
  }
  ```
#### Setting wdio on package.json 
```
"scripts": {
    "test": "wdio wdio.conf.js"
  }
```
#### Run A Test Case
```
npm run test
```

#### Assertion Methods
  - Follow Assertion Project
  
# Reporting
#### allure report installation steps:
  - Install allure
  ```
  npm install @wdio/allure-reporter --save-dev
  ```
  after the process verify if package json have ```"@wdio/allure-reporter": "^6.3.6",``` under ```devDependencies``` & ```dependencies``` has ```"wdio-mochawesome-reporter": "^4.0.0"```
  - Update ```wdio.conf.js``` file:
  ```
  reporters: ['spec'],
    reporters: [['allure',{
        outputDir: 'allure-results', // Path where base result will be generated
        disableWebdriverStepsReporting: true,
        disableWebdriverScreenshotsReporting: true,
    }]],
   "port":4444,
   ```
   - Install allure cli tools
   ```
   npm install -g allure-commandline --save-dev
   ```
   - Run you test Cases
   ```
   npm run test
   ```
   - Run with allure
   ```
   allure generate && allure open
   ```
   this will be hosted on the following port
   ```
    soham@DESKTOP-LHLA0PA MINGW64 /d/WebDriverIO/Reporting
    $ allure generate && allure open
    Report successfully generated to allure-report
    Starting web server...
    2020-08-04 11:44:56.030:INFO::main: Logging initialized @242ms to org.eclipse.jetty.util.log.StdErrLog
    Server started at <http://192.168.0.104:54047/>. Press <Ctrl+C> to exit
   ```
 #### allure troubleshooting:
  - if there is error just remove both ```allure-results``` & ```allure-report``` folder and re-run the test case and generate allure report.
 #### allure report screenshot: (used the smae project as before)
 ![github-small](https://github.com/SohamRoyNoel/WebDriverIO/blob/master/allure-report/img/OverviewOfAllure.PNG?raw=true)


  
