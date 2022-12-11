const router = require('express').Router();
const User = require('../models/User');
const CryptoJS = require('crypto-js');
const jwt = require('jsonwebtoken');

// REGISTER
router.post('/register', async(req, res) => {
    const newUser = new User({ 
        username: req.body.username,
        email: req.body.email,
        password: CryptoJS.AES.encrypt(req.body.password, process.env.CRYPTO_JS_SECRET).toString(),
    });

    try {
        const savedUser = await newUser.save();
        res.status(201).json(savedUser)
    } catch(err) {
        res.status(500).json(err)
    }
})

// LOGIN
router.post('/login', async(req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        if(!user) return res.status(401).json("Wrong credentials")

        // hash the password
        const hashedPassword = CryptoJS.AES.decrypt(user.password, process.env.CRYPTO_JS_SECRET);

        // convert it into a string
        const OriginalPassword = hashedPassword.toString(CryptoJS.enc.Utf8)

        // compare passwords
        if(OriginalPassword !== req.body.password) {
            return res.status(401).json("Wrong credentials")
        }

        // generate user token
        const accessToken = jwt.sign({
            id: user._id,
            isAdmin: user.isAdmin
        }, process.env.JWT_SECRET_KEY, {
            expiresIn: '1d'
        });

        const { password, ...others } = user._doc;

        // if everything is OK
        res.status(200).json({ ...others, accessToken })
    } catch(err) {
        res.status(500).json(err);
    }
});

module.exports = router