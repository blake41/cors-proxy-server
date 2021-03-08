// Listen on a specific host via the HOST environment variable
var host = process.env.HOST || '0.0.0.0';
// Listen on a specific port via the PORT environment variable
var port = process.env.PORT || 8080;

var cors_proxy = require('cors-anywhere');
cors_proxy.createServer({
    originWhitelist: ['https://significant-trades-qi9oyshz5-blake41.vercel.app/'], // Allow all origins
    handleInitialRequest: function(req, res, url) {
      console.log(url)
      console.log(req)
      console.log(res)
      return false
    },
    removeHeaders: ['origin', 'referer']
}).listen(port, host, function() {
    console.log('Running Blakes CORS Anywhere on ' + host + ':' + port);
})
