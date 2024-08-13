// Function to randomize between 2 numbers including these numbers.
function getRandomIntInclusive(min, max) {
  const minCeiled = Math.ceil(min);
  const maxFloored = Math.floor(max);
  return Math.floor(Math.random() * (maxFloored - minCeiled + 1) + minCeiled); // The maximum is inclusive and the minimum is inclusive
}

// Function to get random item from array.
function getRandomItemFromArray(arr, removeSelected = false) {
  const arrayLength = arr.length;

  if (arrayLength === 0) {
    return null;
  }

  const randomIndex = Math.floor(Math.random() * arrayLength);

  if(removeSelected) {
    const [removedItem] = arr.splice(randomIndex, 1);
    return removedItem;
  } else {
    return arr[randomIndex];
  }  
}

// Function to remove values of an array from the main array.
function removeArrayFromMainArray(mainArray, arrayToRemove) {
  return mainArray.filter((el) => !arrayToRemove.includes(el));
}

// Check if value is in array.
function itemInArray(array, item) {
  return array.includes(item);
}

// Set input value to min/max on change.
function setValueMinMax(input) {
  const min = parseInt(input.min);
  const max = parseInt(input.max);
  const value = parseInt(input.value);
  const defaultValue = parseInt(input.dataset.default);

  // If value is empty, set default value if present, else set the min value.
  if(Number.isNaN(value)) {
    if(!Number.isNaN(defaultValue)) {
      input.value = defaultValue;
    } else {
      input.value = min;
    }
  }

  if(value < min) {
    input.value = min;
  }

  if(value > max) {
    input.value = max;
  }
}

// Keep input value below another input value.
function checkValueSmallerThanMax(input, inputMax) {
  const value = parseInt(input.value);
  const maxValue = parseInt(inputMax.value);

  if(value > maxValue) {
    inputMax.value = value;
  }
}

// Keep input value above another input value.
function checkValueBiggerThanMin(input, inputMin) {
  const value = parseInt(input.value);
  const minValue = parseInt(inputMin.value);

  if(value < minValue) {
    inputMin.value = value;
  }
}

// Run function when key is pressed
function keyEvent(key, functionToRun) {
  document.addEventListener('keyup', (event) => {
    const settingsMenu = document.querySelector('#settings-menu[open]');
    if (settingsMenu !== null) return;
    
    if (event.key === key.toLowerCase() || event.key === key.toUpperCase()) {
      functionToRun();
    }
  })
}

export { getRandomIntInclusive, getRandomItemFromArray, removeArrayFromMainArray, itemInArray, setValueMinMax, checkValueBiggerThanMin, checkValueSmallerThanMax, keyEvent };