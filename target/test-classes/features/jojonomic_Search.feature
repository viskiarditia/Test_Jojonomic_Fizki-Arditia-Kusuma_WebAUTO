@Search
  Feature: Search Feature Jojonomic

    Background: Open to Website
      Given User Open to Website service nsw
    Scenario Outline: Menu Search Jojonomic
      When User Click Search Field and input Apply for a number plate
      Then User Click menu Find Locations
      Then User click and Search "<locations>" on Suburb Locations
      Examples:
        | locations                    |
        | Sydney 2000                  |
        | Sydney Domestic Airport 2020 |
