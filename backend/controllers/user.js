const router = require('express').Router()
const db = require("../models")
const bcrypt = require('bcryptjs')

const {User} = db
// put placeholder while waiting for keywords from group
router.post('/', async (req,res) => {
    let {password, ...placeholder} = req.body;
    const user = await User.create({
        ...placeholder,
        role: 'author',
        passwordDigest: await bcrypt.hash(password, 20)
    })
    res.json(user)
})

router.get('/', async (req, res) => {
    const users = await User.findAll()
    res.json(users)
})

module.exports = router