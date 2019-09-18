const http = require("http");
const port = process.env.PORT || 3000;

const handler = (req, res) =>{    
    console.log('Server received request.');
    //res.status(200).send('Hello World!');
    //res.end('Hello From Github!');
    res.end(process.env.CONNECTION_STRING || 'No connection string');
}

const server = http.createServer(handler);

server.listen(port, err=>{
    if (err){
        console.log(err);
    }
    else{
        console.log(`Server listening on port: ${port}`);
    }
});
