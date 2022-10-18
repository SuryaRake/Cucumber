Feature: This feature would be creating a calculator for Add and Subtract

  @sanity
  Scenario: To Add two numbers
    Given I have a calculator
    When I add 4 and 5
    Then I should get the result as 9

  Scenario Outline: To Add multiple set of numbers
    Given I have a calculator
    When I add <Num1> and <Num2>
    Then I should get the result as <expResult>

    Examples: 
      | Num1 | Num2 | expResult |
      |    3 |    5 |         8 |
      |    6 |    7 |        13 |
      |   10 |   11 |        21 |

  Scenario: To Add the given numbers
    Given I have a calculator
    When I add below numbers
      | 3 |
      | 4 |
      | 5 |
      | 2 |
      | 8 |
    Then I should get the result as 22
