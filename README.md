# Mataffaren - endpoint testing


# Info 
We used Postman and cucumber to do endpoint testing for the website "Mataffaren".
The tests are based on our postman collection "mataffaren.collection.json" which includes different tests. Our mission was to test that it worked in VSC with help from Cucumber and React. 

To run our tests we needed to write the following command in the terminal:
-npm install
-npm start (to start the server, important so the tests can run)
-npm run test (to run cucumber tests)
-npm run newman-test (to run newman tests)


# Tests
¤ first_page.js (feature: As a REST-api endpoint consumer I want to be able to get to the first page of the shop)

¤ sverigelottenBla.js (feature: As a REST-api endpoint consumer I want to be able to get specific information about the product Sverigelotten Bla)

¤ vegofars.js (feature: As a REST-api endpoint consumer I want to be able to get specific information about the product vegofars)


# Problems
We needed to remove the star symbol on line 13 and instead write it manually "mataffaren.collection.json".
All the tests are passing, but there's a bug causing some step definitions not to appear in the terminal when we run "npm run test".
