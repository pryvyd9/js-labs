class File{
    constructor(filename){
        this.filename = filename;
        this.fs = require('fs');
    }

    read(codec = null){
        return this.fs.readFileSync(this.filename, codec);
    }
}

class FileFacade{
    constructor(file){
        this.file = file;
    }
    read(codec = null){
        return this.file.read(codec);
    }
    readTxt(){
        return this.file.read('utf-8');
    }
}

class FileProxy{
    constructor(file){
        this.file = file;
    }
    read(codec = null){
        console.log("starting reading file: " + this.file.filename);
        let data = this.file.read(codec);
        console.log("finished reading file: " + this.file.filename);
        return data;
    }
}

// Default
var file = new File("file.txt");
console.log(file.read("utf-8"));

// Facade
var file1 = new FileFacade(new File("file.txt"));
console.log(file1.readTxt());

// Facade
var file2 = new FileProxy(new File("file.txt"));
console.log(file2.read("utf-8"));
