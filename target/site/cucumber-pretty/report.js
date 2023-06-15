$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("features/jojonomic_Search.feature");
formatter.feature({
  "line": 2,
  "name": "Search Feature Jojonomic",
  "description": "",
  "id": "search-feature-jojonomic",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    }
  ]
});
formatter.scenarioOutline({
  "line": 6,
  "name": "Menu Search Jojonomic",
  "description": "",
  "id": "search-feature-jojonomic;menu-search-jojonomic",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 7,
  "name": "User Click Search Field and input Apply for a number plate",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click menu Find Locations",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click and Search \"\u003clocations\u003e\" on Suburb Locations",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "search-feature-jojonomic;menu-search-jojonomic;",
  "rows": [
    {
      "cells": [
        "locations"
      ],
      "line": 11,
      "id": "search-feature-jojonomic;menu-search-jojonomic;;1"
    },
    {
      "cells": [
        "Sydney 2000"
      ],
      "line": 12,
      "id": "search-feature-jojonomic;menu-search-jojonomic;;2"
    },
    {
      "cells": [
        "Sydney Domestic Airport 2020"
      ],
      "line": 13,
      "id": "search-feature-jojonomic;menu-search-jojonomic;;3"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 32792072291,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Open to Website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User Open to Website service nsw",
  "keyword": "Given "
});
formatter.match({
  "location": "basePageStepDefs.userOpenToWebsiteServiceNsw()"
});
formatter.result({
  "duration": 1692192708,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Menu Search Jojonomic",
  "description": "",
  "id": "search-feature-jojonomic;menu-search-jojonomic;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User Click Search Field and input Apply for a number plate",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click menu Find Locations",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click and Search \"Sydney 2000\" on Suburb Locations",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "searchStepdefs.userClickSearchFieldAndInputApplyForANumberPlate()"
});
formatter.result({
  "duration": 30650244833,
  "status": "passed"
});
formatter.match({
  "location": "searchStepdefs.userClickMenuFindLocations()"
});
formatter.result({
  "duration": 182715083,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: headless chrome\u003d114.0.5735.133)\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027fizkis-MacBook-Air.local\u0027, ip: \u00272001:448a:2022:250f:6c9a:345b:a1a4:6448%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027aarch64\u0027, os.version: \u002713.4\u0027, java.version: \u002711.0.18\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b8dd089fefefd5f927bfcb078004dd5c, clickElement {id\u003dD36CED2FA7C123484628A8DE94A74BEE_element_71}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.133, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: /var/folders/nl/kl9228955pj...}, goog:chromeOptions: {debuggerAddress: localhost:50883}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:50883/devtoo..., se:cdpVersion: 114.0.5735.133, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on MAC (b8dd089fefefd5f927bfcb078004dd5c)] -\u003e xpath: //ul[@class\u003d\u0027MainNav__list-peZtddYtxn\u0027]/li[.\u003d\u0027Find locations\u0027]]\nSession ID: b8dd089fefefd5f927bfcb078004dd5c\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\n\tat step_definitions.searchStepdefs.userClickMenuFindLocations(searchStepdefs.java:32)\n\tat ✽.Then User Click menu Find Locations(features/jojonomic_Search.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney 2000",
      "offset": 23
    }
  ],
  "location": "searchStepdefs.userClickAndSearchOnSuburbLocations(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 107967292,
  "status": "passed"
});
formatter.before({
  "duration": 24447566917,
  "status": "passed"
});
formatter.background({
  "line": 4,
  "name": "Open to Website",
  "description": "",
  "type": "background",
  "keyword": "Background"
});
formatter.step({
  "line": 5,
  "name": "User Open to Website service nsw",
  "keyword": "Given "
});
formatter.match({
  "location": "basePageStepDefs.userOpenToWebsiteServiceNsw()"
});
formatter.result({
  "duration": 1976613625,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Menu Search Jojonomic",
  "description": "",
  "id": "search-feature-jojonomic;menu-search-jojonomic;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 1,
      "name": "@Search"
    }
  ]
});
formatter.step({
  "line": 7,
  "name": "User Click Search Field and input Apply for a number plate",
  "keyword": "When "
});
formatter.step({
  "line": 8,
  "name": "User Click menu Find Locations",
  "keyword": "Then "
});
formatter.step({
  "line": 9,
  "name": "User click and Search \"Sydney Domestic Airport 2020\" on Suburb Locations",
  "matchedColumns": [
    0
  ],
  "keyword": "Then "
});
formatter.match({
  "location": "searchStepdefs.userClickSearchFieldAndInputApplyForANumberPlate()"
});
formatter.result({
  "duration": 37004864292,
  "status": "passed"
});
formatter.match({
  "location": "searchStepdefs.userClickMenuFindLocations()"
});
formatter.result({
  "duration": 145811583,
  "error_message": "org.openqa.selenium.ElementNotInteractableException: element not interactable\n  (Session info: headless chrome\u003d114.0.5735.133)\nBuild info: version: \u00274.1.2\u0027, revision: \u00279a5a329c5a\u0027\nSystem info: host: \u0027fizkis-MacBook-Air.local\u0027, ip: \u00272001:448a:2022:250f:6c9a:345b:a1a4:6448%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027aarch64\u0027, os.version: \u002713.4\u0027, java.version: \u002711.0.18\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCommand: [b6a6de47d068552682a09f68c16adf73, clickElement {id\u003dCDA71675B01295E58B7EBE271AE6E462_element_74}]\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 114.0.5735.133, chrome: {chromedriverVersion: 114.0.5735.90 (386bc09e8f4f..., userDataDir: /var/folders/nl/kl9228955pj...}, goog:chromeOptions: {debuggerAddress: localhost:51196}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), se:cdp: ws://localhost:51196/devtoo..., se:cdpVersion: 114.0.5735.133, setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:extension:credBlob: true, webauthn:extension:largeBlob: true, webauthn:extension:minPinLength: true, webauthn:extension:prf: true, webauthn:virtualAuthenticators: true}\nElement: [[ChromeDriver: chrome on MAC (b6a6de47d068552682a09f68c16adf73)] -\u003e xpath: //ul[@class\u003d\u0027MainNav__list-peZtddYtxn\u0027]/li[.\u003d\u0027Find locations\u0027]]\nSession ID: b6a6de47d068552682a09f68c16adf73\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:490)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:200)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:133)\n\tat org.openqa.selenium.remote.codec.w3c.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:53)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:184)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.invokeExecute(DriverCommandExecutor.java:167)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:142)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:558)\n\tat org.openqa.selenium.remote.RemoteWebElement.execute(RemoteWebElement.java:251)\n\tat org.openqa.selenium.remote.RemoteWebElement.click(RemoteWebElement.java:77)\n\tat step_definitions.searchStepdefs.userClickMenuFindLocations(searchStepdefs.java:32)\n\tat ✽.Then User Click menu Find Locations(features/jojonomic_Search.feature:8)\n",
  "status": "failed"
});
formatter.match({
  "arguments": [
    {
      "val": "Sydney Domestic Airport 2020",
      "offset": 23
    }
  ],
  "location": "searchStepdefs.userClickAndSearchOnSuburbLocations(String)"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "duration": 108515584,
  "status": "passed"
});
});