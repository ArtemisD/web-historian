var path = require('path');
var archive = require('../helpers/archive-helpers');
var fs = require('fs');
var httpHelper = require('./http-helpers.js');

// require more modules/folders here!

exports.handleRequest = function(req, response) {
  var serverReqAsset;
  var status = 200;

  // console.log('REQUEST:😂😂😂😂😂😂😂😂',req);
  // console.log('RESPONSE:🐬🐬🐬🐬🐬🐬',response)
  if (req.method === 'GET') {
    if (req.url === '/') {
      serverReqAsset = archive.paths.siteAssets + '/index.html';

      httpHelper.serveAssets(response, serverReqAsset, function(data) {
        response.writeHead(status, httpHelper.headers);
        response.end(data);
      });
    }



    //do something
    // httpHelper.serveAssets( response, asset, function(data){
    //
    //   console.log(" GET REQUEST 😂😂😂😂😂😂😂😂");
    //   response.writeHead(status, httpHelper.headers);
    //   console.log(httpHelper.headers);
    //   response.end(data);
    // });
    // respond.end()
  } else if (req.method === 'POST') {
    status = 201;
    archive.isUrlArchived('URL', function() {


    });

    console.log(" RECEIVED POST REQUEST 🐬🐬🐬🐬🐬🐬");
  }

  response.end(archive.paths.list);
};

// var statusCode = 200;
//
// var defaultCorsHeaders = {
//   'access-control-allow-origin': '*',
//   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS',
//   'access-control-allow-headers': 'content-type, accept',
//   'access-control-max-age': 10 // Seconds.
// };
//
// // See the note below about CORS headers.
// var headers = defaultCorsHeaders;
// // Tell the client we are sending them plain text.
// //
// // You will need to change this if you are sending something
// // other than plain text, like JSON or HTML.
// headers['Content-Type'] = 'application/JSON';
// // .writeHead() writes to the request line and headers of the response,
// // which includes the status and all headers.
// response.writeHead(statusCode, headers);
// console.log(headers);
// // Make sure to always call response.end() - Node may not send
// // anything back to the client until you do. The string you pass to
// // response.end() will be the body of the response - i.e. what shows
// // up in the browser.
// //
// // Calling .end "flushes" the response's internal buffer, forcing
// // node to actually send all the data over to the client.
// // response.end();
//
// if (request.url !== '/classes/messages') {
//   statusCode = 404;
//   var headers = defaultCorsHeaders;
//   headers['Content-Type'] = 'application/JSON';
//   response.writeHead(statusCode, headers);
//   response.end();
//   return;
// }
//
// if (request.url === '/classes/messages') {
//   if (request.method === 'GET') {
//     statusCode = 200;
//     var headers = defaultCorsHeaders;
//     headers['Content-Type'] = 'application/JSON';
//     response.writeHead(statusCode, headers);
//     response.end(JSON.stringify(fakeObject));
//   } else if (request.method === 'POST') {
//     statusCode = 201;
//     var headers = defaultCorsHeaders;
//     headers['Content-Type'] = 'application/JSON';
//     response.writeHead(statusCode, headers);
//     var postedObj;
//     request.on('data', chunk => {
//       postedObj = chunk;
//       fakeObject.results.push(JSON.parse(postedObj));
//     });
//     response.end(JSON.stringify(fakeObject));
//   }
// }
// // response.end('Hello, World!!!!!!!!!!!'); // note from doc below: // response.end([data][, encoding][, callback])# // data <string> | <Buffer> // encoding <string> // callback <Function> // This method signals to the server that all of the response headers and body have been sent; that server should consider this message complete. The method, response.end(), MUST be called on each response.
// }; // These headers will allow Cross-Origin Resource Sharing (CORS). // This code allows this server to talk to websites that // are on different domains, for instance, your chat client. // // Your chat client is running from a url like file://your/chat/client/index.html, // which is considered a different domain. // // Another way to get around this restriction is to serve you chat // client from this domain by setting up static file serving. // var defaultCorsHeaders = { //   'access-control-allow-origin': '*', //   'access-control-allow-methods': 'GET, POST, PUT, DELETE, OPTIONS', //   'access-control-allow-headers': 'content-type, accept', //   'access-control-max-age': 10 // Seconds. // }; // module.exports.requestHandler = requestHandler;
// exports.requestHandler = requestHandler;
