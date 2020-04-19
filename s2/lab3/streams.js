const fs = require('fs');
const util = require('util');
const {Transform} = require('stream')

const types = {
    STRING: 0,
    INT: 1,
}
const states = {
    TYPE: 0,
    SIZE: 1,
    DATA: 2,
}

function Serializer(options){
    this.state = states.TYPE;
    this.type = types.INT;
    this.buffer = "";
    this.numberBufferSize = 4;
    this.bufferSize = 0;
    this.startPos = 1;
    this.pos = this.startPos;

    this.result = new Array();

    // init Transform
    Transform.call(this, options);
}

util.inherits(Serializer, Transform);

Serializer.prototype._toString = function(a){
    if (typeof a == "string")
        return a

    let str = a.toString(16);
    var arr = new Array(this.numberBufferSize).fill(0);
    for (var i = 0; i < str.length; i++)
        arr[i] = str[i];

    return arr.reverse().join('');
}
Serializer.prototype.serialize = function(a){
    if (typeof a == "string")
        return this._toString(types.STRING) + this._toString(a.length) + a
    
    return this._toString(types.INT) + this._toString(this.numberBufferSize) + this._toString(a);
}
Serializer.prototype._deserialize = function(){
    if (this.type == types.INT){
        let n = parseInt(this.buffer.substring(0, this.pos), 16);
        if (isNaN(n))
            throw new CustomException("Serializer type and data didn't match.");
        this.buffer = this.buffer.substring(this.pos);
        this.pos = this.startPos;
        return n;
    }
    if (this.type == types.STRING){
        let s = this.buffer.substring(0, this.pos);;
        this.buffer = this.buffer.substring(this.pos);
        this.pos = this.startPos;
        return s;
    }
}
Serializer.prototype.deserialize = function(){
    if (this.buffer == '')
        return '';
    if (this.state == states.TYPE){
        if (this.pos < this.numberBufferSize){
            this.pos++;
            return '';
        }
        this.type = this._deserialize();
        this.state = states.SIZE;
        return '';
    }
    if (this.state == states.SIZE){
        if (this.pos < this.numberBufferSize){
            this.pos++;
            return '';
        }
        this.bufferSize = this._deserialize();
        this.state = states.DATA;
        return '';
    }
    if (this.state == states.DATA){
        if (this.pos < this.bufferSize){
            this.pos++;
            return '';
        }
        let d = this._deserialize();
        this.state = states.TYPE;
        return d;
    }
}
Serializer.prototype._transform = function (chunk, encoding, done) {
    this.buffer += chunk.toString();
    for (var i = 0; i < chunk.length; i++){
        var res = this.deserialize();
        if (res != '')
            this.result.push(res);
    }
    done(null, chunk)
}
Serializer.prototype.getResult = function(){
    return this.result;
}

var ser = new Serializer();
const filename = 'file';

var data = [
    12,
    'hello'
];
var ws = fs.createWriteStream(filename);
data.forEach(element => ws.write(ser.serialize(element)));



var rs = fs.createReadStream(filename, { emitClose: true}).pipe(ser).on('data', () => {});
rs.addListener('end', () => console.log(ser.getResult()));
