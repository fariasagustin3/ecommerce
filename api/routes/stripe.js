const router = require('express').Router();
const KEY = process.env.STRIPE_KEY
const Stripe = require('stripe')
const stripe = Stripe('sk_test_51LII2ZAVboyClKcxlXRQ0spDkky6x98RZgp9OucJaRDHqZEsGMVcCKsbpYDVajCq5LbIfRckGJChbaDZOq9tE9Ww00X5fT2ZyR')

router.post('/payment', (req, res) => {
    stripe.charges.create({
        source: req.body.tokenId,
        amount: req.body.amount,
        currency: 'usd'
    }, (stripeErr, stripeRes) => {
        if(stripeErr) {
            res.status(500).json(stripeErr);
        } else {
            res.status(201).json(stripeRes);
        }
    })
});

module.exports = router;