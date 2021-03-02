var http = require('http')

console.log("Criando servidor!")
http.createServer(function(req,res){
    res.end("hello, Welcome to my website!!")
}).listen(8081)
console.log("Servidor rodando!")