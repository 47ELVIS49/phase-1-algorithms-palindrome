// index.js

function isPalindrome(str) {
  // Remove non-alphanumeric characters and convert to lowercase
  const cleanStr = str.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
  
  // Check if the cleaned string is the same forwards and backwards
  return cleanStr === cleanStr.split("").reverse().join("");
}

module.exports = isPalindrome;
