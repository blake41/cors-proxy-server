// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: [], // Allow all origins
    handleInitialRequest: function(req, res, url) {
      debugger
      console.log(req)
      console.log(res)
      return false
    }
}).listen(port, host, function() {
    console.log('Running blake CORS Anywhere on ' + host + ':' + port);
})
