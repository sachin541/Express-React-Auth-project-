const User = require('../models/userModel');

async function getUser(req, res) {
    try {
        const userId = req.user.userId;
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'Not found' });
        res.json(user);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
}

async function updateUser(req, res) {
    try {
        const userId = req.user.userId;
        const user = await User.findById(userId);
        if (!user) return res.status(404).json({ message: 'Not found' });

        Object.keys(req.body).forEach(key => {
            user[key] = req.body[key];
        });

        const updatedUser = await user.save();
        res.json(updatedUser);
    } catch (err) {
        res.status(400).json({ message: err.message });
    }
}

module.exports = {
  
    getUser,
    updateUser,
   
};
