const express = require('express');
const http = require('http');
const cors = require('cors');
const app = express();

let port = process.env.PORT || 6060;

const server = http.createServer(app);
var io = require('socket.io')(server,{
  cors:{
    origin: "*"
  }
});

app.use(express.json())
app.use(cors())

app.get('/',(req,res)=>{
  res.send("hello world")
})

io.on("connection",(socket)=>{
  console.log("user connected " + socket.id);
  socket.on("disconnect",()=>{
    console.log("tata");
  })
})

server.listen(port,()=>{
  console.log('Server started '+ port);
})
