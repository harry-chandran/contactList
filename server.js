var express = require('express');
var app = express();
var mongojs = require('mongojs');
var db = mongojs('contactlist',['contactlist'])

var bodyParser = require('body-parser');



/*app.get('/',function(req,res){
	res.send("this message is from server")
});*/


app.use(express.static(__dirname + "/public"));
app.use(bodyParser.json());

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
		//console.log(docs);
		res.json(docs);
	});
});

app.post('/contactList',function(req,res){
	db.contactlist.insert(req.body,function(err,docs){
		res.json(docs)
	})
});
app.delete('/contactList/:id',function(req,res){
	var id = req.params.id;
	console.log(id)
	console.log(mongojs.ObjectId(id))
	db.contactlist.remove({_id:mongojs.ObjectId(id)},function(err,docs){
		res.json(docs);
	})
})
app.get('/contactList/:id',function(req,res){

	var id = req.params.id;
	db.contactlist.findOne({_id:mongojs.ObjectId(id)},function(err,docs){
		res.json(docs);
	});
});

app.put('/contactList/:id',function(req,res){

	var id = req.params.id;
	db.contactlist.findAndModify({query:{_id:mongojs.ObjectId(id)},
		update:{$set:{name:req.body.name,email:req.body.email,number:req.body.number}},
		new:true},function(err,docs){
			res.json(docs);
			});
});
app.listen(3000);
console.log('hurrry my server is running')