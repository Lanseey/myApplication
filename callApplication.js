var http = require('http'); 
var application = require('./application.js');
var server = http.createServer(function (req, res) {

  if (req.url == '/') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(application.root.function(application.root.name));
    res.end();
  } else if (req.url == '/about') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(application.about.function(application.root.name));
    res.end();
  } else if (req.url == '/contact') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(application.contact.function(application.root.name));
    res.end();
  } else if (req.url == '/gallery') {
    res.writeHead(200, { 'Content-Type': 'text/html' });
    res.write(application.gallery.function(application.root.name));
    res.end();
  } else {
    res.end('Invalid Requests!');
  }
});

server.listen(22000);

console.log('Node.js web server at port 5000 is running.. :D');
