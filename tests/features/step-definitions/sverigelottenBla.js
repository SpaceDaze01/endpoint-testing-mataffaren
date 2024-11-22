
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

let apiResponse;

Then('product should have a valid image.url and thumbnail.url', async function () {
  
  // Debug: Ensure the response is an object
  expect(apiResponse).to.be.an('object').that.is.not.empty;

  // Expected URLs
  const expectedImageUrl = 'https://d2rfo6yapuixuu.cloudfront.net/h20/h89/13075555483678/73102021_1655112061550_master_axfood_400';
  const expectedThumbnailUrl = 'https://d2rfo6yapuixuu.cloudfront.net/h2f/h8f/13075555614750/73102021_1655112061550_master_axfood_100';

  // Check if 'image' and 'thumbnail' properties exist
  if (apiResponse.image && apiResponse.image.url) {
    const imageUrl = apiResponse.image.url;
    expect(imageUrl).to.equal(expectedImageUrl);
  } else {
    throw new Error('Image URL is missing or invalid in the API response');
  }

  if (apiResponse.thumbnail && apiResponse.thumbnail.url) {
    const thumbnailUrl = apiResponse.thumbnail.url;
    expect(thumbnailUrl).to.equal(expectedThumbnailUrl);
  } else {
    throw new Error('Thumbnail URL is missing or invalid in the API response');
  }
  
});

Then('description should be present and not empty', async function(){
  // Kontrollera att response finns
  expect(apiResponse).to.be.an('string').that.is.not.empty;

  const description = apiResponse('Beskrivning == $0');
  expect(description).to.be.a('string').that.is.not.empty;

});