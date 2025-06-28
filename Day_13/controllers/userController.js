
const User = require('../models/User')

exports.getAllUsrs = async (req, res) => {
    try {
        const users = await User.find();
        res.json(users);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}

exports.createUser = async (req, res) => {
    try {
        const {name, email, password} = req.body;
        const user = new User({name, email, password});
        await user.save();
        res.json(user);
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
}


// Another way to write the same code for exprots functions
// module.exports = {
//     getAllUsrs,
//     createUser
// }