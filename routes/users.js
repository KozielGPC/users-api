const express = require('express');
const router = express.Router();
const User = require('../models/user')


// FindMany
router.get('/', async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


//FindOne
router.get('/:id', getUser, (req, res) => {
    res.json(res.user);
})


//Create
router.post('/', async (req, res) => {
    const user = new User({
        first_name: req.body.first_name,
        last_name: req.body.last_name,
        username: req.body.username,
        password: req.body.password
    });

    try {
        const newUser = await user.save();
        res.status(201).json(newUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//Update
router.patch('/:id', getUser, async (req, res) => {
    if (req.body.username != null) {
        res.user.username = req.body.username;
    }

    if (req.body.first_name != null) {
        res.user.first_name = req.body.first_name;
    }

    if (req.body.last_name != null) {
        res.user.last_name = req.body.last_name;
    }

    if (req.body.password != null) {
        res.user.password = req.body.password;
    }

    try {
        const updatedUser = await res.user.save();
        res.json(updatedUser);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
})

//Delete
router.delete('/:id', getUser, async (req, res) => {
    try {
        await res.user.remove();
        res.json({ message: 'User removed successfully' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
})


async function getUser(req, res, next) {
    let user;
    try {
        user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).json({ message: "User not found." });
        }
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
    res.user = user;
    next();
}

module.exports = router;