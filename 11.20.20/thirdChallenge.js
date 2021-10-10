function trumpDetector(trumpySpeech){
    trumpySpeech.toLowerCase()
    let vowels = ['a', 'e', 'i', 'o', 'u']
    let counter = 0;
    let repeated = 0;
    let vowelCount = 0;
  
    for (i=0; i < trumpySpeech.length; i++) {
      if (trumpySpeech[i] == trumpySpeech[i+counter]) {
          let trumpyDump = i;
          if (vowels.includes(i)) {
            counter++
            vowelCount++
          }
      }
    }
  console.log('running?')
  return counter
}

trumpDetector("HUUUUUGEEEE WAAAAAALL")