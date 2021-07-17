const https = require('https');
const fs = require('fs');

const options = {
  key: fs.readFileSync('./key.pem'), 
  cert: fs.readFileSync('./cert.pem')
};

fs.readFile('./index.html', function (err, html) {
    if (err) {
        throw err; 
    }       
    https.createServer(options, function (req, res) {
        res.writeHeader(200, {"Content-Type": "text/html"});  
        res.write(html);  
        res.end()
    }).listen(8000);
});