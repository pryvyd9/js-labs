const util = require('util');

// State 
class State{
}
class HiState{
    say(c){
        console.log("Hi, ");
        c.state = new NameState();
    }
}
class NameState{
    say(c){
        console.log("Pedre!");
        c.state = '';
    }
}

util.inherits(HiState, State);
util.inherits(NameState, State);

class Greeting{
    constructor(){
        this.state = new HiState();
    }
    say(){
        if (this.state == '')
            return false;

        this.state.say(this);
        return true;
    }
}

let h = new Greeting();

// State pattern
// Greet
while(h.say());


// Template method
var datastore = {
    process: function() {
        this.connect();
        this.select();
        this.disconnect();
        return true;
    }
};
 
function inherit(proto) {
    var F = function() { };
    F.prototype = proto;
    return new F();
}
 

// Create template method
var mySql = inherit(datastore);
 
mySql.connect = function() {
    console.log("MySQL: connect step");
};
mySql.select = function() {
    console.log("MySQL: select step");
};
mySql.disconnect = function() {
    console.log("MySQL: disconnect step");
};

// execute template method
mySql.process();