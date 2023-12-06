1. Download Appium server :
   https://appium.io/docs/en/2.1/quickstart/install/ -> npm i --location=global appium

2. Install 2 plugin:
   https://appium.io/docs/en/2.1/quickstart/uiauto2-driver/ -> appium driver install uiautomator2
   https://github.com/appium/appium-flutter-driver -> appium driver install --source=npm appium-flutter-driver

3. Khởi chạy Appium server
   https://appium.io/docs/en/2.1/quickstart/install/ -> appium

4. Tạo app Flutter + build debug-profile apk:
   Khi viết code cần gán các Key cho từng widget để lấy id của widget

Build:
flutter build apk --debug
flutter build apk --profile

5. Viết script
   Trong script sẽ chứa thông tin về app và chứa cả path của apk

   Viết script bằng nodejs và run nó

6. Nodejs cần có 2 thư viện (package) là webdriverio và appium-flutter-finder

---

Sửa lỗi không chạy được do socket hang up:
https://stackoverflow.com/questions/59075420/an-unknown-server-side-error-occurred-while-processing-the-command-could-not-pr
thoát appium
adb uninstall io.appium.uiautomator2.server
adb uninstall io.appium.uiautomator2.server.test
chạy appium

---

list các driver đã cài đặt : appium driver list --installed
update các driver : appium driver update
