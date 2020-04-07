var arr = [
    { name: "Alex", phone: "11111" },
    { name: "Pavlo", phone: "22222" },
    { name: "Tom", phone: "33333" }
];



function findPhoneByName(name) {
    return arr.find(n => n.name == name).phone;
}

console.log(findPhoneByName("Pavlo"));