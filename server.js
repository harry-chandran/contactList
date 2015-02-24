var express = require('express');
var app = express();

app.get('/',function(req,res){
	res.send("this message is from server")
});

app.listen(3000);
console.log('hurrry my server is running')