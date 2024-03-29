// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: ['https://significant-trades-blake41.vercel.app', 'http://localhost:3000'], // Allow all origins
    handleInitialRequest: function(req, res, url) {
      console.log(url)
      return false
    },
    removeHeaders: ['origin', 'referer']
}).listen(port, host, function() {
    console.log('Running Blakes CORS Anywhere on ' + host + ':' + port);
})
