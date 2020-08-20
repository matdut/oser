// Realiza o require do express, http, e socketio
//var app = require('express')();
const express = require('express')
const path = require('path')
const PORT = 21497
// passa o express para o http-server
//var http = require('http').Server(express);
// passa o http-server par ao socketio
//app.use(app.static(path.join(__dirname, 'public')))
// cria uma rota para fornecer o arquivo index.html
express()
  .use(express.static(path.join(__dirname, 'public')))
  .get('/', (req, res) => res.sendFile(__dirname + '/index.html'))
  .listen(PORT, () => console.log(`Listening on ${ PORT }`))
// inicia o servidor na porta informada

/*
http.listen(3000, function(){
  console.log('Servidor rodando em: http://localhost:3000');
});
*/
