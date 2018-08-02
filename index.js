var http = require('http');


http.createServer(

    function(req, res){
        
        //el req es la variable que viene del cliente y el res es la 
        //resp que uno le da
        
        
        
    //var path = req.url.toLowerCase();
     var path = req.url.replace(/\/?(?:\?.*)?$/, '').toLowerCase();
        
        switch(path){
        case '':
                  
            res.writeHead(200, {'Content-Type': 'text-plain'});
            res.end('HOME');
            break;
        case '/about':
            res.writeHead(200, {'Content-Type': 'text-plain'});
            res.end('ABOUT');
            break;
        default:
            res.writeHead(404, {'Content-Type': 'text-plain'});
            res.end('ERROR NOT FOUND');
            break;    
            
          }
        
      
    }
).listen(3000);
console.log("localhost:3000");

