const express = require('express');
const mongoose = require('mongoose');
const dotenv = require('dotenv');
const userRoute = require('./routes/user')
const authRoute = require('./routes/auth')
const productRoute = require('./routes/product')
const cartsRoute = require('./routes/cart')
const ordersRoute = require('./routes/order')
const cors = require('cors')

dotenv.config()

const app = express();

// Database connection
mongoose.connect(process.env.MONGO_URL)
    .then(() => console.log("Database connected"))
    .catch((error) => console.log(error))

// Middlewares
app.use(express.json())
app.use(cors())

// Routes
app.use('/api/user', userRoute)
app.use('/api/auth', authRoute)
app.use('/api/products', productRoute)
app.use('/api/carts', cartsRoute)
app.use('/api/orders', ordersRoute)

app.listen(process.env.PORT || 5000, () => {
    console.log('Backend server is running')
})