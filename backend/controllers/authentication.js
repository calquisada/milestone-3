const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcryptjs')
const jwt = require('json-web-token')

const { User } = db

router.post('/', async (req, res) => {

    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if (req.body.password_digest === user.password_digest) {
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user.userId })
        res.json({ user: user, token: result.value })
    } else {
        res.status(404).json({ message: `The email or password provided is invalid.` })
    }
})

module.exports = router