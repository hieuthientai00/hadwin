const { remote } = require("webdriverio");
const { byValueKey } = require("appium-flutter-finder");

// Application setting
const wdOpts = {
  hostname: "127.0.0.1",
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
  await driver.elementSendKeys(passwordTextfield, "aSymbol");
  await driver.elementClick(loginButton);
  setTimeout(() => {
    driver.deleteSession();
  }, 15000);
})();
