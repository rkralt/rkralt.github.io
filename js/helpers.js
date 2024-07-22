// Function to randomize between 2 numbers including these numbers.
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// Function to get random item from array.
function getRandomItemFromArray(arr) {
  const arrayLength = arr.length;

  const randomIndex = Math.floor(Math.random() * arrayLength);
  
  return arr[randomIndex];
}

// Function to remove values of an array from the main array.
function removeArrayFromMainArray(mainArray, arrayToRemove) {
  return mainArray.filter((el) => !arrayToRemove.includes(el));
}

export {getRandomIntInclusive, getRandomItemFromArray, removeArrayFromMainArray}; 