var hashmap = new Map();

function makeHash(val) {
    var hash = 0, i, chr;
    if (val.length === 0) return hash;
    for (i = 0; i < val.length; i++) {
      chr   = val.charCodeAt(i);
      hash  = ((hash << 5) - hash) + chr;
      hash |= 0; // Convert to 32bit integer
    }
    return hash;
};

function add(obj) {
    hashmap[makeHash(obj.name)] = obj.phone;
}
add({ name: "Alex", phone: "11111" });
add({ name: "Pavlo", phone: "22222" });
add({ name: "Tom", phone: "33333" });
// hashmap["hh"] = 1;



console.log(hashmap[makeHash("Tom")]);