var http = require('http'), 
    fs = require('fs'), 
    url = require('url'),
    port = 8080;

/* Global variables */
var listingData, server;

var requestHandler = function(request, response) {
  var parsedUrl = url.parse(request.url);
  if(parsedUrl.href === '/listings' && request.method === 'GET'){
      response.statusCode = 200;
      response.write(listingData);
      response.end();
  }
  else{
    response.statusCode = 404;
    response.write('Bad gateway error');
    response.end();
  }
};

server = http.createServer(requestHandler);

fs.readFile('listings.json', 'utf8', function(err, data) {
  if (err) throw err;
  listingData = data;

  server.listen(port);
});