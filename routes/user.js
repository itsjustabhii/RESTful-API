const express = require('express')
const router = express.Router()
const app = express()

router.get('/', (req, res) => {
    res.send("User's Page")
})

module.exports = router