var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist'])

/*app.get('/',function(req,res){
	res.send("this message is from server")
});*/

app.use(express.static(__dirname + "/public"));

app.get('/contactList',function(req,res){
	//res.send("I recived a get request");
	/*person1 = {
		name : "harry",
		email : "harry@gmail.com",
		number : "9698566594"
	};
	person2 = {
		name : "harry1",
		email : "harry@gmail.com",
		number : "9698566594"
	};
	person3 = {
		name : "harry2",
		email : "harry@gmail.com",
		number : "9698566594"
	}
	var contactList = [person1,person2,person3];
	res.json(contactList);*/

	db.contactlist.find(function(err,docs){
		console.log(docs);
		res.json(docs);
	});
});

app.listen(3000);
console.log('hurrry my server is running')