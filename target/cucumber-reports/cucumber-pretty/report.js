$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("login.feature");
formatter.feature({
  "line": 2,
  "name": "I want to login into my account to purchase an item",
  "description": "",
  "id": "i-want-to-login-into-my-account-to-purchase-an-item",
  "keyword": "Feature",
  "tags": [
    {
      "line": 1,
      "name": "@googleSearch"
    },
    {
      "line": 1,
      "name": "@test"
    }
  ]
});
formatter.scenario({
  "line": 5,
  "name": "As a user I want to be able to login into",
  "description": "my account",
  "id": "i-want-to-login-into-my-account-to-purchase-an-item;as-a-user-i-want-to-be-able-to-login-into",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 8,
  "name": "I am on automation practice website",
  "keyword": "Given "
});
formatter.step({
  "line": 9,
  "name": "I enter \"email\" and \"password\"",
  "keyword": "When "
});
formatter.step({
  "line": 10,
  "name": "I click on \"sign button\" to log into my account and select on \"women\"",
  "keyword": "And "
});
formatter.step({
  "line": 11,
  "name": "select \"tops\" and select \"t-shirt\"",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "I add to \"cart\" and \"submit\"",
  "keyword": "Then "
});
formatter.match({
  "location": "Loginsteps.i_am_on_automation_practice_website()"
});
formatter.result({
  "duration": 6399941800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "email",
      "offset": 9
    },
    {
      "val": "password",
      "offset": 21
    }
  ],
  "location": "Loginsteps.i_enter_and(String,String)"
});
formatter.result({
  "duration": 159890500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sign button",
      "offset": 12
    },
    {
      "val": "women",
      "offset": 63
    }
  ],
  "location": "Loginsteps.i_click_on_to_log_into_my_account_and_select_on(String,String)"
});
formatter.result({
  "duration": 2862027100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "tops",
      "offset": 8
    },
    {
      "val": "t-shirt",
      "offset": 26
    }
  ],
  "location": "Loginsteps.select_and_select(String,String)"
});
formatter.result({
  "duration": 3432668800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "cart",
      "offset": 10
    },
    {
      "val": "submit",
      "offset": 21
    }
  ],
  "location": "Loginsteps.i_add_to_and(String,String)"
});
formatter.result({
  "duration": 37471400,
  "status": "passed"
});
});