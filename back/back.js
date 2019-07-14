
const express = require('express')
const http = require('http')
const path = require('path')
const bodyParser = require('body-parser');


const config =  require('./config')
const staticFRONT = path.join(__dirname, '../front/build')

const getUsers = require(path.join(__dirname, './services/getUsers'))
const banUser = require(path.join(__dirname, './services/banUser'))

usersList = [
	{name:"thor",banned:false},
	{name:"golgoth",banned:false},
	{name:"bahamut",banned:false},
	{name:"george",banned:false}
]

const app = express()

app.use(bodyParser.urlencoded({extended: false}));

// serving the front, as you can see it's pretty simple
app.use(express.static(staticFRONT))
app.get('/', (req, res, next) => res.sendFile(staticFRONT))

// here you have every endpoint for all the apis
app.get('/get/users', getUsers(usersList))
app.put('/ban/user', banUser(usersList))

http.createServer(app).listen(config.server.port, () => {
    console.log('server started')
})
