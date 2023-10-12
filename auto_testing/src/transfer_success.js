const {remote} = require('webdriverio');
const { byValueKey } = require('appium-flutter-finder');

// Application setting
const wdOpts = {
  hostname: 'localhost',
  port: 4723,
  logLevel: 'info',
  capabilities: {
      'platformName': 'Android',
      'appium:automationName': 'Flutter',
      'appium:retryBackoffTime': 500,
      'appium:deviceName': 'SM J730G',
      'appium:appPackage': 'com.example.hadwin',
      'appium:appActivity': 'com.example.hadwin.MainActivity',
      'appium:app': 'E:\\appium\\app_project\\hadwin\\build\\app\\outputs\\flutter-apk\\app-debug.apk'
      },
};
// Login testing
(async () => {
  // connect appium server
  const driver = await remote(wdOpts);
  // get element
  const usernameTextfield = byValueKey('loginUsernameTextField');
  const passwordTextfield = byValueKey('loginPasswordTextField');
  const loginButton = byValueKey('loginButton');
  // action testing
  await driver.elementSendKeys(usernameTextfield, 'the.batman');
  await driver.elementSendKeys(passwordTextfield, 'aSymbol');
  await driver.elementClick(loginButton);
  const dialog = byValueKey('snackbarLoginSuccess');
  await driver.elementClick(dialog);
  const sendMoney = byValueKey('sendMoneyButton');
  await driver.elementClick(sendMoney);
  const businessContact1 = byValueKey('businessContact1')
  
  await driver.elementClick(businessContact1);

  const buttonNumber0 = byValueKey('buttonNumber0');
  const buttonNumber1 = byValueKey('buttonNumber1');
  const buttonNumber2 = byValueKey('buttonNumber2');
  const buttonNumber3 = byValueKey('buttonNumber3');
  const buttonNumber4 = byValueKey('buttonNumber4');
  const buttonNumber5 = byValueKey('buttonNumber5');
  const buttonNumber6 = byValueKey('buttonNumber6');
  const buttonNumber7 = byValueKey('buttonNumber7');
  const buttonNumber8 = byValueKey('buttonNumber8');
  const buttonNumber9 = byValueKey('buttonNumber9');
  const sendButton = byValueKey('Send');

  await driver.elementClick(buttonNumber1);
  await driver.elementClick(buttonNumber2);
  await driver.elementClick(buttonNumber4);
  
  await driver.elementClick(sendButton);

  const transactionReceipt = byValueKey('transactionReceipt');

  await driver.elementClick(transactionReceipt)

  setTimeout(() => {
    driver.deleteSession();
  }, 5000);

})();

