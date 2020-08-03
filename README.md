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
  
#### Reporting
  - mochawesome: https://github.com/adamgruber/mochawesome
  
