//las librerias son variables
/*var express = require('express');
var exphbs = require('express-handlebars');
*/
/*

# 
#
#
# 

*/


var http = require('http');


http.createServer(

    function(req, res){
        res.writeHead(200, {'Content-Type': 'text-plain'});
        res.end('Hello World');
    }
).listen(3000);
console.log("localhost:3000");



//variable global hilo principal para correr el proyecto
//var app = express();

//app.engine('');
