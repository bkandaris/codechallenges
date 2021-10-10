function descendingOrder(n){
    let string = n.toString();
    let array = string.split('');
    let sorted = array.sort();
    let reversed = sorted.reverse();
    let join = sorted.join('');
    let bigNum = Number(join);
    return bigNum
  }