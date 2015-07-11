var restify = require('restify');
var clockClient = require('./clockClient.js')

var server = restify.createServer();
server.get('/notify/:text', notify);

function notify(req, res, next)
{
	res.send("'"+req.params.text+"' sent");
	clockClient.display(req.params.text);
	next();
}

clockClient.start();

server.listen(8080, function(){
	console.log('server listening…');
});

