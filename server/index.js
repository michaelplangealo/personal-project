require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const massive = require('massive');
const session = require('express-session');
const { getProducts } = require(`${__dirname}/controller/products`); 
const { addToCart } = require(`${__dirname}/controller/cart`);
const { getUser, logout } = require(`${__dirname}/controller/users`);

const passport = require('passport');
const Auth0Strategy = require('passport-auth0');

const app = express();

app.use(bodyParser.json());

app.use( session({
    secret: process.env.CONNECTION_STRING,
    resave: false, //optional
    saveUninitialized: true, //optional
    expires: 1000000 
}));
app.use( passport.initialize() );
app.use( passport.session() );
passport.use(
    new Auth0Strategy(
        {
            domain: process.env.DOMAIN,
            clientID: process.env.CLIENT_ID,
            clientSecret: process.env.CLIENT_SECRET,
            callbackURL: 'http://localhost:3000/#/' //originally '/login'
        },
        function(accessToken, refreshToken, extraParams, profile, done) {
            console.log(profile);
            app
                .get('db')
                .getUser(profile.id)
                .then(response => {
                    if (!response[0]) {
                        app
                            .get('db')
                            .addUser(profile.id, profile.displayName)
                            .then( res => done(null, res[0]));
                    } else {
                        return done(null, response[0]);
                    }
                });
        }
    )
);

passport.serializeUser((user, done) => {
    done(null, user);
});

passport.deserializeUser((user, done) => {
    done(null, user);
});

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
app.post('/api/cart/:id', addToCart);
app.get(
    '/login',
    passport.authenticate('auth0', {
        sucessRediret: "http://localhost:3000/",
        failureRedirect: '/login'
    })
);
app.get('/logout', logout);
app.get('/api/me', getUser);

const port = 3001;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
});