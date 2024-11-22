Feature: Fist page
  As a REST-api endpoint consumer I want to be able to get to the first page of the shop.



  Background:
    Given that I am on the domain "http://localhost:4000"

  Scenario: Get to the first page
    When I visit the endpoint "GET" "/api/leftMenu/categorytree"
    Then the status code of the response should be 200
    And the response time should be below 1000 milliseconds
    And there should be at least 10 main categories
    And each main category should have the properties title and url


    Examples:
      | {dynamic: 'categoryUrlParts'} |