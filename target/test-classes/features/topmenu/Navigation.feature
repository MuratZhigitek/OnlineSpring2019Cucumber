@navigation

Feature: Navigation menu options
  As user I want to use top menu for navigation

  Background:

    Given user is on the landing page
    When user log in as a "driver"

    Scenario: Login as driver and navigate to the Vehicles

    Then user navigate to "Fleet" and "Vehicles"
    And user verifies that "Cars" page name is displayed

    Scenario: Login as driver and navigate to the Vehicles Odometer

      Then user navigate to "Fleet" and "Vehicle Odometer"
      And user verifies that "Vehicles Odometers" page name is displayed