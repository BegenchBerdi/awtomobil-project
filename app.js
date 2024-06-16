require('dotenv').config()
const express = require('express')
const app = express()
const morgan = require('morgan')
const cors = require('cors')
const bodyParser = require('body-parser')
const { query } = require('./app_server/database/index.js')


console.log("dksnkdnskdnskdskdn")

app.use(morgan('dev'))  // gelen req leri logo yazdyrya
app.use(cors())    // servere dostup acyar

        


//parse application/json
app.use(bodyParser.json())   

//parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))


app.listen(8000,(error)=>{
    console.log(error ? error:"RUN SERVER localhost:8000")
})


require('./app_server/routers/routerManager')(app)
