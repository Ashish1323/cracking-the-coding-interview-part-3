function isCapitalizedCorrectly(str) {
    // Check if all letters are uppercase
    if (str === str.toUpperCase()) {
      return true;
    }
  
    // Check if all letters are lowercase
    if (str === str.toLowerCase()) {
      return true;
    }
  
    // Check if only the first letter is uppercase
    if (str[0] === str[0].toUpperCase() && str.slice(1) === str.slice(1).toLowerCase()) {
      return true;
    }
  
    // If none of the conditions are met, return false
    return false;
  }
  
  // Example usage:
  console.log(isCapitalizedCorrectly("Hello")); // true
  console.log(isCapitalizedCorrectly("hello")); // true
  console.log(isCapitalizedCorrectly("HELLO")); // true
  console.log(isCapitalizedCorrectly("HeLLo")); // false
  