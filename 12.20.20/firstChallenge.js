function countSmileys(arr) {
    let count = 0;
    for (i = 0; i < arr.length; i++) {
        if (arr[i].includes(':)') || arr[i].includes(':D') || arr[i].includes(';-D') || arr[i].includes(':~)') || arr[i].includes(';~D'))
            count++
    }
    return count
}

