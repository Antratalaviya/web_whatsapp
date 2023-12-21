import User from '../model/userSchema.js';

export const addUser = async (req, res) => {
    try {
        let exist = await User.findOne({ sub: req.body.sub });
        if (exist) {
            return res.status(200).json({ message: 'User already exist' });
        }
        let user = new User(req.body);
        await user.save();
        return res.status(201).json({ message: 'User created Successfully' });
    } catch (error) {
        return res.status(500).json({ message: error.message })
    }
}

export const getUser = async (req, res) => {
    try {
        let users = await User.find({});
        return res.status(200).json(users);
    } catch (error) {
        return res.status(500).json({ message: error.message });
    }
}