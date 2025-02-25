const express = require('express');
const User = require('../Models/User');
const upload = require('../Middlewear/uploadMiddleware');
const router = express.Router();
const path = require('path');

// Store user data
router.post('/add', upload.single('profilePicture'), async (req, res) => {
    try {
        const { firstName, lastName, phone, address, email } = req.body;
        const profilePicture = req.file ? req.file.filename : '';

        const newUser = new User({
            firstName,
            lastName,
            phone,
            address,
            email,
            profilePicture
        });

        await newUser.save();
        res.status(201).json({ message: 'User added successfully', user: newUser });
    } catch (error) {
        res.status(500).json({ message: 'Error saving user', error });
    }
});

// Fetch users
router.get('/all', async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching users', error });
    }
});

// Serve images
router.use('/uploads', express.static(path.join(__dirname, '../uploads')));

module.exports = router;
