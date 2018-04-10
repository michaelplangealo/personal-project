require('dotenv').config();

const secretKey = process.env.STRIPE_SECRET;
const stripe = require("stripe")(secretKey);

const stripeCharge = (req, res, next) => {
    stripe.charges.create({
        amount: req.body.amount,
        currency: 'usd',
        source: req.body.source
    }, (err, charge) => {
        res.status(200).json(charge)
    }
)
}

module.exports = stripeCharge