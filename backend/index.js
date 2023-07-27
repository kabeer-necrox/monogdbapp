const  express = require('express');
require('./db/config')
const user = require('./db/user')

const app = express()
app.use(express.json)

app.post("/register",(req, resp)=>{
    resp.send("api inn processing...")
    
})

app.listen(5000)