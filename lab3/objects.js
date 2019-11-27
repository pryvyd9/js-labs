var constObj = new Object();
constObj.name = "Pavlo";
const obj = constObj;
console.log(obj);
obj.name = "NEW";
console.log(obj);

var varObj = new Object();
varObj.name = "Pavlo";
var obj1 = varObj;
console.log(obj1);
obj1.name = "NEW";
console.log(obj1);

// obj = obj1;
obj1 = obj;

function createUser(name, city) {
    return { name, city };
}

console.log(createUser("Franchesko Totty","Roma"));