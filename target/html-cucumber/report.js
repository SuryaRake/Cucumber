$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/features/Calculator.feature");
formatter.feature({
  "name": "This feature would be creating a calculator for Add and Subtract",
  "description": "",
  "keyword": "Feature"
});
formatter.scenario({
  "name": "To Add two numbers",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have a calculator",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefenition.CalcStepDef.i_have_a_calculator()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I add 4 and 5",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefenition.CalcStepDef.i_add_and(int,int)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I should get the result as 9",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefenition.CalcStepDef.i_should_get_the_result_as(int)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.uri("file:src/test/java/features/Login.feature");
formatter.feature({
  "name": "Login Feature Scenario",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "This scenario is define the fail path (one feature can have multiple scenarios)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"\u003cUserName\u003e\" and password as \"\u003cPassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "I click on LoginButton",
  "keyword": "And "
});
formatter.step({
  "name": "I  should get the error message \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "UserName",
        "Password"
      ]
    },
    {
      "cells": [
        "suryak@dgh.com",
        "Rtefvb@et87"
      ]
    },
    {
      "cells": [
        "ryuin@dfgj.com",
        "ETjuuh@r5h"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have already launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefenition.LoginStepDef.i_have_already_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is define the fail path (one feature can have multiple scenarios)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"suryak@dgh.com\" and password as \"Rtefvb@et87\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefenition.LoginStepDef.i_enter_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on LoginButton",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefenition.LoginStepDef.i_click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I  should get the error message \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefenition.LoginStepDef.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "I have already launched the application",
  "keyword": "Given "
});
formatter.match({
  "location": "stepDefenition.LoginStepDef.i_have_already_launched_the_application()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "This scenario is define the fail path (one feature can have multiple scenarios)",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@sanity"
    }
  ]
});
formatter.step({
  "name": "I enter username as \"ryuin@dfgj.com\" and password as \"ETjuuh@r5h\"",
  "keyword": "When "
});
formatter.match({
  "location": "stepDefenition.LoginStepDef.i_enter_username_as_and_password_as(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I click on LoginButton",
  "keyword": "And "
});
formatter.match({
  "location": "stepDefenition.LoginStepDef.i_click_on_LoginButton()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "I  should get the error message \"The email or password you have entered is invalid.\"",
  "keyword": "Then "
});
formatter.match({
  "location": "stepDefenition.LoginStepDef.i_should_get_the_error_message(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});