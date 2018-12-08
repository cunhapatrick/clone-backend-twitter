const express = require("express")
const mongoose = require("mongoose")
const cors = require('cors')

const app = express()

const server = require('http').Server(app)

const io = require('socket.io')(server)

mongoose.connect('mongodb://root:root123@ds227674.mlab.com:27674/clone-twitter', {
    useNewUrlParser: true
})

app.use((req,res,next)=>{
    req.io = io

    return next()
})

app.use(cors())

app.use(express.json())

app.use(require("./routes"))

server.listen(3000,()=>{
    console.log('server started on port 3000...')
})