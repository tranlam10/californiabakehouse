const express = require('express');
const app = express();

app.use(express.static('public'));
app.use(express.static('images'));

app.get('/', function(req, res){
	res.sendFile(__dirname + '/main.html');
});

app.get('/about', function(req, res){
	res.sendFile(__dirname+'/about.html');
});

app.get('/catering', function(req, res){
	res.sendFile(__dirname+'/catering.html');
});

app.get('/promotions', function(req, res){
	res.sendFile(__dirname+'/promotions.html');
});

app.get('/gallery', function(req, res){
	res.sendFile(__dirname+'/gallery.html');
});

app.get('/contact', function(req, res){
	res.sendFile(__dirname+'/contact.html');
});


app.listen(3000, function(){
	console.log("The application is running");
});
