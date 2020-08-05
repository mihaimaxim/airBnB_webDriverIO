# airBnB_webdriverIO
Web app automation using WebdriverIO

<h3>Setup your project</h3>
<h4>Initialize a new NPM project</h4>
Before installing dependencies, you’ll need to initialize a new NPM project. 
This will allow you to use the CLI to install dependencies in your project. <br>Reach your project folder via Command Prompt and type:
<br><br>
<code>$ npm init -y</code>
<br>
<h4>Install WebdriverIO CLI</h4>
After initializing your new NPM project, install the CLI:
<br><br>
<code>$ npm i --save-dev @wdio/cli</code>
<h4>Generate Configuration File</h4>
Next, you’ll generate a configuration file to store your WebdriverIO settings.

To do that, just run the configuration utility:

<code>$ npx wdio config -y</code>
<br>
<h4>Next step:</h4>
Go to your page.js file from the ./pageObjects folder and edit the Page class's open() method <br><br>from <br>
<pre>
  open (path) {
    return browser.url(`https://the-internet.herokuapp.com/${path}`)
  }</pre> to<br>
<pre>
  open () {
    return browser.url('https://www.airbnb.com/')
  }</pre> 

 <h4>Start the Testrunner</h4>

To do so, just run:

<code>$ npx wdio wdio.conf.js</code>
