
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';
let responseData = null;

Then('there should be at least {float} main categories', async function (numberOfCategories) {
  
  let categoryUrls = [];
  function getAll(children) {
    for (let child of children) {
      categoryUrls.push(child.url);
      if (child.children) { getAll(child.children); }
    }
  }
  getAll(this.json.children);

  expect(categoryUrls.length).to.be.at.least(numberOfCategories);

  
  this.categoryUrlParts = categoryUrls;
});

Then('each main category should have the properties title and url', async function () {
  for (let category of responseData.data.children) {
    expect(category.title).to.be.a('string');
    expect(category.url).to.be.a('string');
    expect(category.title).to.not.be.empty;
    expect(category.url).to.not.be.empty;
  }  
});