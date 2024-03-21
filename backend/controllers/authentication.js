const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcryptjs')

const { User } = db

router.post('/', async (req, res) => {

    let user = await User.findOne({
        where: { email: req.body.email }
    })

    if (!user || !await bcrypt.compare(req.body.password, user.password_digest)) {
        res.status(404).json({ message: `The email or password provided is invalid.` })
    } else {
        const result = await jwt.encode(process.env.JWT_SECRET, { id: user.userId })
        res.json({ user: user, token: result.value })
    }
})

module.exports = router