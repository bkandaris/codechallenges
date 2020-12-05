function capitalize(s){
    let answerArray = []
    //   first loop to capitalize odds
    let odds = ''
    let evens = ''
    let newLetter = ''
    for (i = 0; i < s.length; i++) {
      if (i % 2 != 0) {
        let newLetter = s[i]
        console.log(newLetter)
        newLetter.toUpperCase()
        odds.concat(newLetter)
      } else odds.concat(newLetter)
    }
      answerArray.push(odds)
    //   second loop to capitalize evens
    
      return answerArray;
    };

    console.log(capitalize('hello'))