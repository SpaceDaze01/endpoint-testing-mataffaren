
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

let apiResponse; 

Then('description should exist and not be empty', async function () {
  expect(apiResponse).to.be.an('object').that.is.not.empty;

  if (apiResponse.description) {
    const description = apiResponse.description;
    expect(description).to.be.a('string').that.is.not.empty;
    console.log('Extracted Description:', description);
  } else {
    throw new Error('Description is missing or undefined in the API response');
  }
});

Then('consumer storage instructions should be present and not empty', async function(){
  expect(apiResponse).to.be.an('object').that.is.not.empty;

  if (apiResponse.description) {
    const storageInstructions = apiResponse.storageInstructions;
    expect(storageInstructions).to.be.a('string').that.is.not.empty;
    console.log('Extracted storageInstructions:', storageInstructions);
  } else {
    throw new Error('storageInstructions is missing or undefined in the API response');
  }
});

Then('ingredients should be present and not empty', async function(){
  expect(apiResponse).to.be.an('object').that.is.not.empty;

  if (apiResponse.description) {
    const ingredients = apiResponse.ingredients;
    expect(ingredients).to.be.a('string').that.is.not.empty;
    console.log('Extracted ingredients:', ingredients);
  } else {
    throw new Error('Ingredients is missing or undefined in the API response');
  }
});