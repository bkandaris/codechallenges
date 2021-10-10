function multiples(m, n) {
    let answer = []
    for (i = 1; i <= n; i++) {
        let multiplier = 1
        if ((i * multiplier) <= m) {
        answer.push(i * n)
        multiplier++
      }
    }
    return answer
}F

console.log(multiples(3, 15));