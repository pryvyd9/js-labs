let variable = "Pavlo";
const dob = "3/11/1995";
function greet(name){
    console.log("Hello, " + name);
}
greet("Pacollo");
greet(variable);
greet(variable + " from " + dob);

const time = new Date().getHours() + ":" + new Date().getMinutes();
console.log(time);