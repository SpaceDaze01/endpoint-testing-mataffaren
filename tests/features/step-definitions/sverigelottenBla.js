
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

let apiResponse; 

Then('product should have a valid image.url and thumbnail.url', async function () {
  const apiUrl = 'http://localhost:4000/api/axfood/rest/p/100010710_ST'; 

  const res = await fetch(apiUrl);

  expect(res.ok).to.be.true;

  apiResponse = await res.json();
  console.log('API Response:', JSON.stringify(apiResponse, null, 2));

  expect(apiResponse).to.be.an('object').that.is.not.empty;

  if (apiResponse.image && apiResponse.image.url) {
    const imageUrl = apiResponse.image.url;
    console.log('Extracted Image URL:', imageUrl);

    expect(imageUrl).to.be.a('string').that.is.not.empty;
    expect(imageUrl).to.match(/^https?:\/\/.+/); 
  } else {
    throw new Error('Image URL is missing or undefined in the API response');
  }

  if (apiResponse.thumbnail && apiResponse.thumbnail.url) {
    const thumbnailUrl = apiResponse.thumbnail.url;
    console.log('Extracted Thumbnail URL:', thumbnailUrl);

    expect(thumbnailUrl).to.be.a('string').that.is.not.empty;
    expect(thumbnailUrl).to.match(/^https?:\/\/.+/); 
  } else {
    throw new Error('Thumbnail URL is missing or undefined in the API response');
  }
});

Then('description should be present and not empty', function () {
  expect(apiResponse).to.be.an('object').that.is.not.empty;

  if (apiResponse.description) {
    const description = apiResponse.description;
    expect(description).to.be.a('string').that.is.not.empty;
    console.log('Extracted Description:', description);
  } else {
    throw new Error('Description is missing or undefined in the API response');
  }
});