//1st step is to import the http server then create a server from http
import * as http from 'http';

const server=http.createServer((request,response)=>{
    if(request.url==='/a')
    response.write("url a has been invoked")
    else
    response.write("incorrect url has invoked");
    response.end();
});

server.listen(process.env.PORT || 3000,()=>console.log('hello G port 3000'))