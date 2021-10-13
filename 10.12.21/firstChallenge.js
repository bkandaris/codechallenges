// Let's assume we need "clean" strings. Clean means a string should only contain letters a-z, A-Z and spaces. We assume that there are no double spaces or line breaks.

// Write a function that takes a string and returns a string without the unnecessary characters.
// Examples
// removeChars('.tree1')    ==> 'tree'
// removeChars("that's a pie$ce o_f p#ie!")  ==> 'thats a piece of pie'
// removeChars('john.dope@dopington.com')    ==> 'johndopedopingtoncom'
// removeChars('my_list = ["a","b","c"]')    ==> 'mylist  abc'
// removeChars('1 + 1 = 2')    ==> '    ' (string with 4 spaces)
// removeChars("0123456789(.)+,|[]{}=@/~;^$'<>?-!*&:#%_")  ==> '' (empty string)


function removeChars(s) {
    // use a spread operator to create an array so that we can use array methods
    // use the filter method to only look for letters
    // join that array into a new string and return it
    return [...s].filter(c =>c==' '||(c >= 'A' && c <= 'Z') ||(c >= 'a' && c <= 'z')).join('');
   }

   console.log(removeChars("that's a pie$ce o_f p#ie!"));
