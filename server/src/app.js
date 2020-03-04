const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')
const morgan = require('morgan')

const app = express()

//Middlewares

app.use(morgan('combined'))
app.use(bodyParser.json())
app.use(cors())

//Routes

app.get('/status', (req, res)=>{
    res.send({
        ok: true
    })
})

app.listen(process.env.PORT || 8081, 
    ()=> console.log('Server running on port 8081'))