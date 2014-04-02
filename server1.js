var express = require("express");
var app = express();
var port = process.env.PORT || 8080;
var io = require('socket.io').listen(app.listen(port));
var Instagram = require('instagram-node-lib');
var http = require('http');
var request = ('request');
var intervalID;



/**
 * Set the paths for your files
 * @type {[string]}
 */
var pub = __dirname + '/public',
    view = __dirname + '/views';



/**
 * Set the 'client ID' and the 'client secret' to use on Instagram
 * @type {String}
 */
var clientID = 'a8662044981644149357594d60a61206',
    clientSecret = 'fdd12321324948a88e52d21e9e0c9b30';

var url ='http://localhost:8080/'
/**
 * Set the configuration
 */
Instagram.set('client_id', clientID);
Instagram.set('client_secret', clientSecret);
Instagram.set('callback_url', url + 'callback');    //'http://YOUR_URL.COM/callback');
Instagram.set('redirect_uri', url);
Instagram.set('maxSockets', 10);


/**
 * Set your app main configuration
 */
app.configure(function(){
    app.use(express.bodyParser());
    app.use(express.methodOverride());
    app.use(app.router);
    app.use(express.static(pub));
    app.use(express.static(view));
    app.use(express.errorHandler());
});



/**
 * Render your index/view "my choice was not use jade"
 */
app.get("/views", function(req, res){
    res.render("index");
});



/**
 * On socket.io connection we get the most recent posts
 * and send to the client side via socket.emit
 */
io.sockets.on('connection', function (socket) {
  //for now not sending anything when the client connects for the first time.
  /*
  Instagram.tags.recent({ 
      name: 'lollapalooza',
      complete: function(data) {
        socket.emit('firstShow', { firstShow: data });
      }
  });
*/
  //when the client searches for a tag, then go to instagram and get the latest pic
  socket.on('clientSearch' function(data){
  	//ignore the search term for now, just go get the decodedelhi tag pic
  	Instagram.tags.recent({ 
      name: data,
      complete: function(data) {
        socket.emit('searchresult', { searchresult: data });
      }
    });


  });

});




/**
 * Uses the library "instagram-node-lib" to Subscribe to the Instagram API Real Time
 * with the tag "hashtag" lollapalooza
 * @type {String}
 */
 /*
Instagram.subscriptions.subscribe({
  object: 'tag',
  object_id: 'decodedelhi',
  aspect: 'media',
  callback_url: url + 'callback', //'http://YOUR_URL.com/callback',
  type: 'subscription',
  id: '#'
});
*/

/**
 * Needed to receive the handshake
 */
 /*
app.get('/callback', function(req, res){
    var handshake =  Instagram.subscriptions.handshake(req, res);
});
*/

















