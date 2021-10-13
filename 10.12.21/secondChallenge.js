// You need to write a function that reverses the words in a given string. A word can also fit an empty string. If this is not clear enough, here are some examples:

// As the input may have trailing spaces, you will also need to ignore unneccesary whitespace.

// Example (Input --> Output)

// "Hello World" --> "World Hello"
// "Hi There." --> "There. Hi"

function reverse(string){
    // // use the split method to seperate the words into a sub strings
    // let splitStringArray = string.split(' ');
    // // console.log('split string', splitStringArray);
    // // now reverse the array and use the join method to turn it into a string
    // let reversedString = splitStringArray.reverse().join(' ');
    // // console.log('splitStringArray', reversedString);
    // return reversedString;
    // refactor into cleaner code
    return string.split(' ').reverse().join(' ');
  }

  console.log(reverse("Hi There."));

