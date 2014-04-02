var express = require("express");
var app = express();






Instagram = require('instagram-node-lib');

Instagram.set('client_id', 'a8662044981644149357594d60a61206');
Instagram.set('client_secret', 'fdd12321324948a88e52d21e9e0c9b30');

Instagram.tags.info({
  name: 'delhi',
  complete: function(data){
    console.log(data);
  }
});


var http = require('http');
var fs = require('fs'); // Using the filesystem module
var httpServer = http.createServer(requestHandler);
var path = require('path');

var HTTP_OK = 200,
HTTP_ERR_UNKNOWN = 500,
HTTP_ERR_NOT_FOUND = 404;


var port = Number(process.env.PORT || 8080);
console.log('Starting http server on port',port);
httpServer.listen(port);



function requestHandler(req, res) {
        
        var filepath =  (req.url == '/' ? 'main.html' :  "."+req.url) ,
        fileext = path.extname(filepath); 
        console.log("Request for " + filepath+ " received.");


        if(fileext == ".js"){
                filepath =  './js' +req.url;
        }


        fs.exists(filepath, function (f) {
                console.log(f);
                if (f) {

                        fs.readFile(filepath, function (err, content) {
                                if (err) {
                                        res.writeHead(HTTP_ERR_UNKNOWN);
                                        res.end();
                                } else {
                                        res.writeHead(HTTP_OK, contentType(fileext));
                                        res.end(content);
                                }
                        });
                } else {
                        res.writeHead(HTTP_ERR_NOT_FOUND);
                        res.end();
                }
        });
}

function contentType(ext) {
        var ct;

        switch (ext) {
                case '.html':
                ct = 'text/html';
                break;
                case '.css':
                ct = 'text/css';
                break;
                case '.js':
                ct = 'text/javascript';
                break;
                case '.png':
                ct = 'image/png';
                break;
                default:
                ct = 'text/plain';
                break;
        }

        return {'Content-Type': ct};
}



// WebSocket Portion
// WebSockets work with the HTTP server
var io = require('socket.io').listen(httpServer);
var io = require('socket.io').listen(app.listen(port));


// Register a callback function to run when we have an individual connection
// This is run for each individual user that connects
io.sockets.on('connection', 
        // We are given a websocket object in our function
        function (socket) {
                //receiving and broadcasting the peer ids
                socket.on('msg', function(data) {
                        twitterPost = data.toString();
                        console.log('twitterpost: ' + twitterPost);
                        
                        //check for bad words before posting
                        //if(!checkTweetForBadWords(twitterPost)){
                         if(true){
                            //if no bad word found post it to twitter

                            twit.updateStatus(twitterPost, function(response){
                                    console.log('response:', util.inspect(response));
                            });
                        }
                        else{ //found a bad word

                            //send a message to client to not use offensive language

                        }


                        //console.log('got data',data);
                           // cb.__call(
                             // "statuses_update",{"status": twitterPost},function (reply) {console.log('got reply:',reply);});
                        
                });

              
        }
);
