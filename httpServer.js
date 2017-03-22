const http = require('http');
const fs = require('fs');

let server = http.createServer( (req, res) => {
  const reqURL = req.url;
  const reqMethod = req.method;

  // getPets function that handles requests
  const getPets = (url, method) => {
    if (url === '/pets' && method === 'GET') {
      res.setHeader('Content-Type', 'application/json');
      fs.readFile('pets.json', 'utf8', (err, data) => {
        res.end(data);
      });
    } else if (url === '/pets/0' && method === 'GET') {
      res.setHeader('Content-Type', 'application/json');
      fs.readFile('pets.json', 'utf8', (err, data) => {
        res.end(data);
      });
    } else if (url === '/pets/1' && method === 'GET') {
      res.setHeader('Content-Type', 'application/json');
      // fs.readFile('pets.json', 'utf8', (err, data) => {
      fs.readFile('pets.json', 'utf8');
        res.end(pets[0].json);
    } else if (url === '/pets/2' && method === 'GET') {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      // fs.readFile('pets.json', 'utf8', (err, data) => {
      res.end('Not Found');
      // });
    } else if (url === '/pets/-1' && method === 'GET') {
      res.writeHead(404, {'Content-Type': 'text/plain'});
      // fs.readFile('pets.json', 'utf8', (err, data) => {
      res.end('Not Found');
      // });
    }
  };

  switch (reqURL) {
    case '/pets': {
      getPets(reqURL, reqMethod);
    }
    break;
    case '/pets/0': {
      getPets(reqURL, reqMethod);
    }
    break;
    case '/pets/1': {
      getPets(reqURL, reqMethod);
    }
    break;
    case '/pets/2': {
      getPets(reqURL, reqMethod);
    }
    break;
    case '/pets/-1': {
      getPets(reqURL, reqMethod);
    }
    break;
    default:

  }
});


server.listen(8000);
module.exports = server;
