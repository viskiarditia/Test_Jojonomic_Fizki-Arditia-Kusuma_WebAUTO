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
  "duration": 30361757333,
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
  "duration": 1910481292,
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
  "duration": 31126304291,
  "status": "passed"
});
formatter.match({
  "location": "searchStepdefs.userClickMenuFindLocations()"
});
formatter.result({
  "duration": 28614831083,
  "status": "passed"
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
  "duration": 10271385584,
  "status": "passed"
});
formatter.after({
  "duration": 258923000,
  "status": "passed"
});
formatter.before({
  "duration": 24267480417,
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
  "duration": 2002584709,
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
  "duration": 32599038750,
  "status": "passed"
});
formatter.match({
  "location": "searchStepdefs.userClickMenuFindLocations()"
});
formatter.result({
  "duration": 28609055917,
  "status": "passed"
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
  "duration": 8452006000,
  "status": "passed"
});
formatter.after({
  "duration": 160595833,
  "status": "passed"
});
});