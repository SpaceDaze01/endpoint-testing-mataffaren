Feature: vegofars
  As a REST-api endpoint consumer I want to be able to get specific information about the product vegofars.



  Background:
    Given that I am on the domain "http://localhost:4000"

  Scenario: Get to the product info for vegofars
    When I visit the endpoint "GET" "/api/leftMenu/categorytree"
    Then the status code of the response should be 200
    And the response time should be below 1000 milliseconds
    And product should have a valid 'image.url' and 'thumbnail.url'
    And description should exist and not be empty
    And consumer storage instructions should be present and not empty
    And ingredients should be present and not empty