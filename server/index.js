require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const { getProducts } = require(`${__dirname}/controller/products`); 
const { addToCart } = require(`${__dirname}/controller/cart`);
const { getUser, logout } = require(`${__dirname}/controller/users`);
const {accountCreation, passwordChecker} = require(`${__dirname}/controller/bcrypt`);

const bcrypt = require ('bcrypt');

const app = express();
app.use(bodyParser.json());
app.use(cors());
app.set("bcrypt", bcrypt);

app.use( session({
    secret: process.env.CONNECTION_STRING,
    resave: false, //optional
    saveUninitialized: true, //optional
    expires: 2592000000
}));

massive(process.env.CONNECTION_STRING).then( db => {
    app.set( 'db', db);
}).catch( err => console.log( err ));

const setupSchema = (req, res, next) => {
    req.app
      .get('db')
      .schema()
      .then(response => res.status(200).json(response))
      .catch(err => res.status(500).json(err));
};

app.get('/api/products', getProducts);
// app.get('/api/cart'), (req, res, next) => 
app.post('/api/cart/:id', addToCart);
app.put('/api/login', passwordChecker);
app.put('/api/register', accountCreation);
app.get('/logout', logout);
app.get('/api/me', getUser);

const port = 3001;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});