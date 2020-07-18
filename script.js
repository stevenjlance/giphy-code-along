// Console log any message to prove that this file is linked correctly.


// Select the button and the text field, and store them both in constants here.

// Code out an event listener for the button that logs "Button pressed!" to the console when it is clicked

// Go to https://developers.giphy.com/ and create an account. Then create your first app called testApp to create an API key. Enter it below.
var YOUR_API_KEY_HERE = "Replace this string with your API key";

//To get the URL, you can go to https://developers.giphy.com/explorer. Select your app and choose search. Search for something you are interested in and paste in the url in the space below.
function sendApiRequest() {
  var promise = fetch("PASTE_URL_HERE");
  console.log(promise);

  //Convert the response to a JSON object using .json()

  //Save the URL of a single gif image from the JSON object in a variable.

  //Afer creating the addImageToScreen function below, call the function here with the URL varaible you stored above as an arguement.
  
  
}

// Create a function called addImageToScreen. querySelect the wrapper, and add an image tag to it. Interpolate the URL string from the previous function.
function addImageToScreen(myURL) {
  
  
  
}

// Playtime challenges:
// 1. Find something / someone else (rewrite the endpoint so that we aren't searching just for gifs of Beyonce or whatever end image you selected)
// 2. Instead of getting the first image, get a random image from the JSON results
// 3. REPLACE the contents of the wrapper instead of adding onto them
// 4. Make all your images the same height so that they line up nicely
