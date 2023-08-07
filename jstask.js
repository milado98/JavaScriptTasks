// Write a Javascript function that accepts a string as a parameter and converts the first letter of each word into upper case

function capitalizeWords(string) {
  // Split the input string into an array of words
  const words = string.split(' ');

  // Iterate through the words array and capitalize the first letter of each word
  const capitalizedWords = words.map(word => {
    if (word.length > 0) {
      return word[0].toUpperCase() + word.slice(1);
    } else {
      return '';
    }
  });

  // Join the capitalized words array back into a single string
  const resultString = capitalizedWords.join(' ');
  return resultString;
}



// Write a JavaScript function that accepts a string as a parameter and finds the longest word within the string

function findLongestWord(string) {
  // Split the input string into an array of words
  const words = string.split(' ');

  // Initialize a variable to store the longest word
  let longestWord = '';

  // Iterate through the words array and update the longestWord variable
  words.forEach(word => {
    if (word.length > longestWord.length) {
      longestWord = word;
    }
  });

  return longestWord;
}


// Write a JavaScript function that accepts a number as a parameter and checks whether its prime or not

function isPrime(number) {
  if (number <= 1) {
    return false; // 0 and 1 are not prime numbers
  }

  if (number <= 3) {
    return true; // 2 and 3 are prime numbers
  }

  if (number % 2 === 0 || number % 3 === 0) {
    return false; // Numbers divisible by 2 or 3 are not prime
  }

  // Check divisibility by numbers of the form 6k +/- 1, up to the square root of the number
  for (let i = 5; i * i <= number; i += 6) {
    if (number % i === 0 || number % (i + 2) === 0) {
      return false;
    }
  }

  return true; // The number is prime
}


// Write a JavaScript function that accepts an argument and returns the type

function getType(value) {
  return typeof value;
}


// Write a JavaScript function that takes an array of numbers and finds the second lowest and second greatest numbers, respectively

function findSecondLowestAndGreatestNumbers(numbers) {
  if (numbers.length < 2) {
    return "Array should contain at least 2 numbers";
  }

  // Remove duplicate numbers and sort the array in ascending order
  const sortedUniqueNumbers = Array.from(new Set(numbers)).sort((a, b) => a - b);

  if (sortedUniqueNumbers.length < 2) {
    return "Array should contain at least 2 distinct numbers";
  }

  const secondLowest = sortedUniqueNumbers[1];
  const secondGreatest = sortedUniqueNumbers[sortedUniqueNumbers.length - 2];

  return {
    secondLowest: secondLowest,
    secondGreatest: secondGreatest
  };
}


