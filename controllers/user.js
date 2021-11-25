const User = require('../models/User');
const bcrypt = require('bcrypt');
const crypto = require('crypto-js');
const jwt = require('jsonwebtoken');

exports.login = (req, res, next) => {
    let key = crypto.enc.Hex.parse(process.env.MAIL_ENCRYPTION_KEY);
    let iv = crypto.enc.Hex.parse(process.env.MAIL_ENCRYPTION_IV);
    let userName = crypto.AES.encrypt(req.body.userName, key, { iv }).toString();

    User.findOne({ userName })
        .then(user => {
            bcrypt.compare(req.body.password, user.password)
                .then(valid => {
                    if (!valid) {
                        return res.status(401).json({ error: "Erreur d'authentification" });
                    }
                    res.status(200).json({
                        userId: user._id,
                        token: jwt.sign(
                            { userId: user._id },
                            process.env.JWT_KEY
                        )
                    })
                })
                .catch(error => res.status(401).json({ error }));
        })
        .catch(error => res.status(500).json({ error }))
}