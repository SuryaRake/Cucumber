Feature: Login Feature Scenario

  Background: 
    Given I have already launched the application

  #And I clicked on LoginLink
  Scenario: This scenario is define the happy path
    When I enter correct username and password
    And I click on LoginButton
    Then I  should land on the home page

  Scenario: This scenario is define the fail path (one feature can have multiple scenarios)
    When I enter incorrect username and password
    And I click on LoginButton
    Then I  should get the error message "The email or password you have entered is invalid."

  @regression
  Scenario: This scenario is define the fail path (one feature can have multiple scenarios)
    When I enter username as "suryaetyui@sdfg.com" and password as "WERerty5678h"
    And I click on LoginButton
    Then I  should get the error message "The email or password you have entered is invalid."

  @sanity
  Scenario Outline: This scenario is define the fail path (one feature can have multiple scenarios)
    When I enter username as "<UserName>" and password as "<Password>"
    And I click on LoginButton
    Then I  should get the error message "The email or password you have entered is invalid."

    Examples: 
      | UserName       | Password    |
      | suryak@dgh.com | Rtefvb@et87 |
      | ryuin@dfgj.com | ETjuuh@r5h  |
