// We require needed modules at the beginning of the file.
// Http module is all about web.
// Fs module helps us working with files.
const http = require('http');
const fs = require('fs');

// Next it's better to set up your hostname and port
// as constants to be able to access it from all over.
const hostname = '127.0.0.1';
const port = 3000;

// To set up a page to share on get request
// we first need to read the html file.
fs.readFile('index.html', (err, html) => {
    // We need to throw exceptions ourselves.
    if(err){
        throw err;
    }

    // Finally create the endpoint for giving the html page out.
    const server = http.createServer((req, res) => {
        // Set the response code.
        res.statusCode = 200;
        // Set header to indicate response content type.
        res.setHeader('Content-type', 'text/html');
        // We need to compose body of the response
        // by writing in it.
        res.write(html);
        // End writing and configuring the response.
        // After this the response will be sent to the client.
        res.end();
    });
    
    // Start server.
    server.listen(port, hostname, () => {
        console.log('Server started on port ' + port);
    });
});