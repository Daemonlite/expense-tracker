const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const port = process.env.PORT
const cors = require('cors')
const connectDb = require('./database/connect')


//databaseconnection
connectDb()
//middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(cors())

//routes
app.use('/api/users',require('./routes/userRoutes'))
app.use('/api/expenses',require('./routes/expenseRoute'))
app.use('/api/purchases',require('./routes/purchaseRoutes'))

app.listen(port,()=>console.log(`server running on port ${port}`))