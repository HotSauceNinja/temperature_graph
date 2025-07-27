# **Temperature Graph**

## Description:

Temperature recording and visualisation

## Run:

Clone or download the repo

Ensure you have Node.js and npm installed (`node -v`, `npm -v`)

To run from root folder:

```
cd server && npm i
node app.js
cd ../client && npm i
npm start
```

On browser navigate to http://localhost:3000

## Background:

While developing this web app, I made a few decisions which I will list below, which I am happy to discuss my reasoning around:

- Will store the values in an array as it is the easiest data structure to store this in given we do not need to store any other information besides the numbers themselves
- Will create one input where the user can type all the values, separated by spaces. Have opted for this instead of asking for values one by one, in order to increase input speed and keep the scope of the exercise small. This way, we can pass the array of numbers to the server for validation
- Submitting values without + or - before them fails validation
- Numbers not followed by spaces fail validation (ex -5-3+2)
- User cannot use letters of symbols, only numbers
- If array fails validation, the api returns the error message and the chart is not rendered
- If array is validated successfully, the api returns the array and the number closest to zero, in a response object with the keys temperaturesArray and temperatureClosestToZero

Possible extensions / Further thoughts:

- Add tests for the client as well
- I'd opt for keeping all calculations in the same place (API returns max height and closest to zero)
- Possible extension: Generating bar widths dynamically based on how many values we have in the array. This would allow graph to scale visually, ensuring that all bars fit within the container regardless of how many temperatures are submitted.
- Allowing user adds to add positive values without having to type in '+'
- Truncate numbers with long decimals and add a popper to open on hover (opting to display them vertically is a temporary solution to ensure we are able to read the values)
- Allow users to submit excel spreadsheet and we use the temperatures column
