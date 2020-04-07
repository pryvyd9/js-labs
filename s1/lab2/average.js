function average(a, b){
    return (a + b) / 2;
}

function square(x){
    return Math.sqrt(x);
}

function cube(x){
    return x * x * x;
}

for (let index = 0; index < 10; index++) {
    console.log(average(square(index), cube(index)));
}
