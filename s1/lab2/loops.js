function range(start, end){
    let start1 = start % 2 == 1 ? start : start + 1;
    let end1 = end % 2 == 1 ? end : end - 1;
    let arr = [];
    
    for (let i = 0; i <= (end1 - start1) / 2; i++) {
        arr.push(start1 + i * 2);
    }

    return arr;
}

console.log(range(15,30));
console.log(range(2,5));