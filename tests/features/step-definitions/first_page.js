
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

Given('that I am on the domain {string}', async function(urlPrefix){
  this.setUrlPrefix(urlPrefix);
});

When('I visit the endpoint {string} {string}', async function (method, url){
  await this.fetch(url, { method });
});

Then('the status code of the response should be {float}', async function (statusCode){
  expect(this.response.status).to.equal(statusCode);
});

Then('the response time should be below {float} milliseconds', async function (ms){
  expect(this.responseTime).to.be.below(ms);
});

Then('there should be at least {float} main categories', async function (numberOfCategories){
  expect(this.json.children.length).to.be.at.least(numberOfCategories);
  // store the category url parts for the next scenario (see usage in feature file)!
  this.categoryUrlParts = this.json.children.map(x => x.url);
});

Then('each main category should have the properties title and url', async function(){
  // Ensure that each main category has a 'title' and a 'url' and that they're non-empty strings
  this.json.children.forEach(category => {
    // Assert that each category has a title that is a non-empty string
    expect(category.title).to.be.a('string').and.to.not.be.empty;

    // Assert that each category has a url that is a non-empty string
    expect(category.url).to.be.a('string').and.to.not.be.empty;
  });
});

