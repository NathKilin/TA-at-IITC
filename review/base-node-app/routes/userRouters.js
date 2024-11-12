const express = require('express');

//Import Functions
const { createUser } = require('../controller/userControllers')

const router = express.Router()

router.post('/', createUser)

module.exports = router