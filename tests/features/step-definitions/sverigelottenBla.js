
import { Given, When, Then } from '@cucumber/cucumber';
import { expect } from 'chai';

let apiResponse; // Variable to store the API response

Then('product should have a valid image.url and thumbnail.url', async function () {
  // Expected URLs
  const apiUrl = 'http://localhost:4000/api/axfood/rest/p/100010710_ST'; 

  // Send the HTTP GET request
  const res = await fetch(apiUrl);

  // Ensure the request was successful
  expect(res.ok).to.be.true;

  // Parse and store the response JSON
  apiResponse = await res.json();
  console.log('API Response:', JSON.stringify(apiResponse, null, 2));

  // Validate that the response is an object and contains the expected properties
  expect(apiResponse).to.be.an('object').that.is.not.empty;

  // Check that 'image' and 'image.url' exist
  if (apiResponse.image && apiResponse.image.url) {
    const imageUrl = apiResponse.image.url;
    console.log('Extracted Image URL:', imageUrl);

    // Validate the image URL
    expect(imageUrl).to.be.a('string').that.is.not.empty;
    expect(imageUrl).to.match(/^https?:\/\/.+/); // URL format validation
  } else {
    throw new Error('Image URL is missing or undefined in the API response');
  }

  // Check that 'thumbnail' and 'thumbnail.url' exist
  if (apiResponse.thumbnail && apiResponse.thumbnail.url) {
    const thumbnailUrl = apiResponse.thumbnail.url;
    console.log('Extracted Thumbnail URL:', thumbnailUrl);

    // Validate the thumbnail URL
    expect(thumbnailUrl).to.be.a('string').that.is.not.empty;
    expect(thumbnailUrl).to.match(/^https?:\/\/.+/); // URL format validation
  } else {
    throw new Error('Thumbnail URL is missing or undefined in the API response');
  }
});

Then('description should be present and not empty', function () {
  // Ensure the API response exists
  expect(apiResponse).to.be.an('object').that.is.not.empty;

  // Validate that 'description' exists and is a non-empty string
  if (apiResponse.description) {
    const description = apiResponse.description;
    expect(description).to.be.a('string').that.is.not.empty;
    console.log('Extracted Description:', description);
  } else {
    throw new Error('Description is missing or undefined in the API response');
  }
});