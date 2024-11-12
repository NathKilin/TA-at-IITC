const express = require('express');

//Import Functions
const { 
    createUser,
    getUsers,
    getUserByID,
    updateUser,
    deleteUser,
    patchingToUser
    } = require('../controller/userControllers.js')

const router = express.Router()

router.post('/', createUser)
router.get('/', getUsers)
router.get('/:id', getUserByID)
router.put('/:id',  updateUser)
router.delete('/:id', deleteUser)
router.patch('/:id', patchingToUser)
module.exports = router