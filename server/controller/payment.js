require('dotenv').config();

const secretKey = process.env.STRIPE_SECRET;
const stripe = require("stripe")(secretKey);

module.exports = {
    stripeCharge: (req, res, next) => {
        const db = req.app.get('db');
        db.
            
        stripe.charges.create({
            amount: req.body.amount,
            currency: 'usd',
            source: req.body.source
        }, (err, charge) => {
            res.status(200).json(charge)
        }
    )
    }
}