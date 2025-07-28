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

Implementation notes:

- Storing the values in an array as it is the easiest data structure to store this in given we do not need to store any other information besides the numbers themselves
- Created one input where the user can type all the values, separated by spaces. Have opted for this instead of asking for values one by one, in order to increase input speed and keep the scope of the exercise small. This way, we can pass the array of numbers to the server for validation
- Submitting values without + or - before them fails validation
- Numbers not followed by spaces fail validation (ex -5-3+2)
- Validation only accepts a plus or minus sign (+ or -) followed by a number, with an optional decimal part.
- If validation fails, the api returns the error message and the chart is not rendered
- If validation is successful, the api returns the array and the number closest to zero, in a response object with the keys `temperaturesArray` and `temperatureClosestToZero`

## Possible extensions / Further thoughts:

- Add tests for the client
- Move all tests from server/util in one util test file to keep it neater
- Add loading state
- Keep all calculations in the same place (API returns max height and closest to zero)
- Possible extension: Generating bar widths dynamically based on how many values we have in the array. This would allow graph to scale visually, ensuring all bars fit within the container regardless of how many temperatures are submitted.
- Allowing user adds to add positive values without having to type in '+' before each
- Truncate numbers with long decimals on chart labels, and add popper to open on hover (opting to display them vertically is a temporary solution to ensure we are able to read the values)
- Allow users to submit csvs and import the temperatures all in one go from there, to reduce user error
