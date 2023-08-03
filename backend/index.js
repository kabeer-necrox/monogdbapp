const  express = require('express');

const cors = require('cors')
require('./db/config')
const user = require('./db/user')
const Product= require('./db/product')
const app = express()
app.use(express.json())
app.use(cors())

app.post("/register",async(req, resp)=>{
    let User = new user(req.body)
    let result = User.save()
    resp.send(req.body)  
})


app.post('/login', async(req, resp) =>{
    // let user = await User.findOne(req.body).select("-password")
    // resp.send(user)
    resp.send(req.body)
    console.log(req.body)
})


app.post('/add-product',async(req,resp)=>{
    
let product = new Product(req.body)
let result = await product.save()
resp.send(result)

})

app.listen(5000)