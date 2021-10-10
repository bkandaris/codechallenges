function towerBuilder(nFloors) {
    //   add a floor of *'s for each floor
    //  return an array
      let stars = '*';
      let answer = [];
      let starCount = 1
      let numStars = 1
        while (nFloors > 0) {
            let addedStars = stars.repeat(starCount)
            starCount++
            starCount++
            answer.push(addedStars);
            nFloors--
        }
        console.log(answer)
      return answer;
}

towerBuilder(3)