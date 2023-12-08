const { remote } = require("webdriverio");
const { byValueKey } = require("appium-flutter-finder");

// Application setting
const wdOpts = {
  hostname: "0.0.0.0",
  port: 4723,
  logLevel: "info",
  capabilities: {
    platformName: "Android",
    "appium:automationName": "Flutter",
    "appium:retryBackoffTime": 500,
    "appium:deviceName": "SM J730G",
    "appium:appPackage": "com.example.hadwin",
    "appium:appActivity": "com.example.hadwin.MainActivity",
    "appium:app":
      "E:\\appium\\app_project\\hadwin\\build\\app\\outputs\\flutter-apk\\app-debug.apk",
  },
};
// Login testing
(async () => {
  // connect appium server
  const driver = await remote(wdOpts);
  // get element
  const usernameTextfield = byValueKey("loginUsernameTextField");
  const passwordTextfield = byValueKey("loginPasswordTextField");
  const loginButton = byValueKey("loginButton");
  // action testing
  await driver.elementSendKeys(usernameTextfield, "the.batman");
  setTimeout(() => {}, 1000);
  await driver.elementSendKeys(passwordTextfield, "aSymbol");
  setTimeout(() => {}, 1000);
  await driver.elementClick(loginButton);
  const dialog = byValueKey("snackbarLoginSuccess");
  await driver.elementClick(dialog);
  const sendMoney = byValueKey("sendMoneyButton");
  setTimeout(() => {}, 1000);
  await driver.elementClick(sendMoney);
  const businessContact0 = byValueKey("businessContact1");
  setTimeout(() => {}, 1000);
  await driver.elementClick(businessContact0);
  // const buttonNumber1 = byValueKey("buttonNumber1");
  // const buttonNumber2 = byValueKey("buttonNumber2");
  // const buttonNumber4 = byValueKey("buttonNumber4");
  // const sendButton = byValueKey("Send");

  // await driver.elementClick(buttonNumber1);
  // setTimeout(() => {}, 1000);
  // await driver.elementClick(buttonNumber2);
  // setTimeout(() => {}, 1000);
  // await driver.elementClick(buttonNumber4);
  // setTimeout(() => {}, 1000);

  await driver.elementClick(sendButton);

  setTimeout(() => {
    driver.deleteSession();
  }, 5000);
})();
