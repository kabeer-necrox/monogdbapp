const  express = require('express');

const cors = require('cors')
require('./db/config')
const user = require('./db/user')
const app = express()
app.use(express.json())
app.use(cors())

app.post("/register",async(req, resp)=>{
    let User = new user(req.body)
    let result = User.save()
    resp.send(req.body)  
})

app.listen(5000)