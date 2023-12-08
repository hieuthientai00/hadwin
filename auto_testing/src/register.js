const { remote } = require("webdriverio");
const { byValueKey } = require("appium-flutter-finder");

// Application setting
const wdOpts = {
  hostname: "0.0.0.0",
  port: 4723,
  logLevel: "info",
  capabilities: {
    platformName: "android",
    "appium:automationName": "Flutter",
    "appium:retryBackoffTime": 500,
    "appium:deviceName": "Android",
    "appium:appPackage": "com.example.transfer_app",
    "appium:appActivity": "com.example.transfer_app.MainActivity",
    "appium:app":
      "E:\\appium\\transfer_app\\build\\app\\outputs\\flutter-apk\\app-debug.apk",
  },
};
// Register testing
(async () => {
  // connect appium server
  const driver = await remote(wdOpts);
  // get element of login page
  var usernameTextfield = byValueKey("username");
  var passwordTextfield = byValueKey("password");
  // action testing
  await driver.elementSendKeys(usernameTextfield, "hieunv@icitech.net");
  await driver.elementSendKeys(passwordTextfield, "123qweASD");

  var registerButton = byValueKey("registerButton");

  await driver.elementClick(registerButton);

  // get element of register page
  usernameTextfield = byValueKey("username");
  var emailTextfield = byValueKey("email");
  passwordTextfield = byValueKey("password");
  var confirmPasswordTextfield = byValueKey("confirmPassword");
  registerButton = byValueKey("registerButton");

  // execute
  await driver.elementSendKeys(usernameTextfield, "hieuthientai00");
  await driver.elementSendKeys(emailTextfield, "hieunv@icitech.net");
  await driver.elementSendKeys(passwordTextfield, "123qweASD");
  await driver.elementSendKeys(confirmPasswordTextfield, "123qweASD");
  await driver.elementClick(registerButton);

  setTimeout(() => {
    driver.deleteSession();
  }, 10000);
})();
