// Adapter pattern
function OldLog(){
    this.warning = function(context, message){
        console.log("[" + context + "] " + message);
    }
}
function NewLog(){
    this.context = "";
    this.warning = function(message){
        console.log("[" + this.context + "] " + message);
    }
}
function NewLogAdapter(){
    this.log = new NewLog();
    this.warning = function(context, message){
        this.log.context = context;
        this.log.warning(message);
    }
}

// Adapter pattern
const oldLog = new OldLog();
const newLog = new NewLogAdapter();
oldLog.warning("lab4", "Adapter Pattern! old");
newLog.warning("lab4", "Adapter Pattern! new");

// Strategy pattern
class BusinessStrategy1{
    handle(){
        console.log("Selling accessories.");
    }
}
class BusinessStrategy2{
    handle(){
        console.log("Selling organs.");
    }
}

const plan = {
    2015: new BusinessStrategy1(),
    2016: new BusinessStrategy1(),
    2017: new BusinessStrategy2(),
    2018: new BusinessStrategy2(),
    2019: new BusinessStrategy1(),
}


// Strategy pattern
for(var year in plan){
    plan[year].handle();
}
