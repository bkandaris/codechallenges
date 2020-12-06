// John has invited some friends. His list is:

// s = "Fred:Corwill;Wilfred:Corwill;Barney:Tornbull;Betty:Tornbull;Bjon:Tornbull;Raphael:Corwill;Alfred:Corwill";
// Could you make a program that

// makes this string uppercase
// gives it sorted in alphabetical order by last name.
// When the last names are the same, sort them by first name. Last name and first name of a guest come in the result between parentheses separated by a comma.

// So the result of function meeting(s) will be:

// "(CORWILL, ALFRED)(CORWILL, FRED)(CORWILL, RAPHAEL)(CORWILL, WILFRED)(TORNBULL, BARNEY)(TORNBULL, BETTY)(TORNBULL, BJON)"
// It can happen that in two distinct families with the same family name two people have the same first name too.

function meeting(s) {
    let toUpper = s.toUpperCase(); 
    // break it into an array
    let upperCasedArray = toUpper.split(";")

    // loop over and reverse the first and last names
    for (i = 0; i < upperCasedArray.length; i++) {
        let splitValue = upperCasedArray[i].split(':');
        let newString = `(${splitValue[1]}, ${splitValue[0]})`;
        upperCasedArray[i] = newString;
    }

    let upperCased = upperCasedArray.sort().join("")
    return upperCased;
    
}
    


console.log(meeting("Alexis:Wahl;John:Bell;Victoria:Schwarz;Abba:Dorny;Grace:Meta;Ann:Arno;Madison:STAN;Alex:Cornwell;Lewis:Kern;Megan:Stan;Alex:Korn"))