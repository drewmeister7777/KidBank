var express = require('express'),
	app		= express();
var path	= require('path');
	
	
app.get('/', function(req,res) {
	//res.sendfile(__dirname + '/client/views/index.html');
	res.sendFile(path.join(__dirname, '/client/views', 'index.html'));
});

app.use(express.static(__dirname + '/public'));
app.use('/js/', express.static(__dirname + '/client/js'));


app.listen(3000, function() {
	console.log('Listening on port 3000...');
})