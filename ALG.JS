function isPalindrome(word) {
    // Convert the word to lowercase to make the comparison case-insensitive
    word = word.toLowerCase();
    
    // Define two pointers, one starting from the beginning and one from the end
    let left = 0;
    let right = word.length - 1;
    
    // Continue comparing characters until the pointers meet in the middle
    while (left < right) {
      // If characters at the left and right positions are not equal, it's not a palindrome
      if (word[left] !== word[right]) {
        return false;
      }
      
      // Move the pointers towards the center
      left++;
      right--;
    }
    
    // If the loop completes without finding a mismatch, it's a palindrome
    return true;
  }
  
  // Example usage:
  console.log(isPalindrome("gag"));     // true
  console.log(isPalindrome("kayak"));   // true
  console.log(isPalindrome("php"));     // true
  console.log(isPalindrome("radar"));   // true
  console.log(isPalindrome("hello"));   // false
  