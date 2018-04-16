const express = require('express');
const {json} = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');

const users = require('./controller/users');
const cart = require('./controller/cart');
const products = require('./controller/products');
const payment = require('./controller/payment');
const path = require("path")
require('dotenv').config();


const {
    CONNECTION_STRING,
    STRIPE_SECRET,
    SESSION_SECRET
} = process.env;

const bcrypt = require ('bcrypt');

const app = express();
app.use(express.static(`${__dirname}/../build`))

app.use(json());
app.use(cors());
app.set("bcrypt", bcrypt);

app.use( 
    session({
        secret: "session secret yay",
        resave: false, 
        saveUninitialized: false
    })
);

massive(CONNECTION_STRING).then( db => {
    app.set( 'db', db);
}).catch( err => console.log( err ));

app.get('/api/products', products.getProducts);
app.get('/api/cart', cart.getCart);
app.post('/api/cart', cart.addToCart);
app.delete('/api/cart/:id', cart.deleteFromCart);
app.put('/api/login', users.login);
app.put('/api/register', users.register);
app.put('/api/checkoutform', users.getShippingInfo);
app.post('/api/payment', payment.stripeCharge);
// app.get('/logout', logout);
app.get('/api/me', users.getUser);

const port = process.env.PORT || 3001;

app.get("*", (req, res, next) => {
 res.sendFile(path.join(__dirname, "/../build/index.html"))
})

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});