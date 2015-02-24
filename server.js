var express = require('express');
var app = express();

/*app.get('/',function(req,res){
	res.send("this message is from server")
});*/

app.use(express.static(__dirname + "/public"));

app.listen(3000);
console.log('hurrry my server is running')