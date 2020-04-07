class File{
    // Open constructor
    constructor(filename){
        this.filename = filename;
        this.fs = require('fs');
    }

    read(){
        return this.fs.readFileSync(this.filename, 'utf-8');
    }
}

// File factory
function open(filename){
    var f = new File();
    f.filename = filename;
    return f;
}

// Open constructor
var file = new File("file.txt");
console.log(file.read());

// Factory method
var file1 = open("file.txt");
console.log(file1.read());
