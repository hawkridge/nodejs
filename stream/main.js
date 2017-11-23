var Readable = require('stream').Readable,
    stream = new Readable(),
    data = ('Lorem ipsum dolor sit amet, errem fierent deserunt in mea, ne usu omnesque efficiantur, simul eligendi pri id. Ius tollit definitionem et.').split(' ');

stream._read = function () {
    if(data.length) {
        setTimeout(function () {
            stream.push(data.shift());
        }, 200)
    } else {
        stream.push(null)
    }
};

stream.pipe(process.stdout);