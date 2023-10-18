

const User = require("../models/User");
const bcrypt = require("bcryptjs");

const register = async (req, res) => {
    try {
        const { email, password } = req.body;

        let user = await User.findOne({ email });

        if (user) {req.session.error = "User already exists";}

        const hasdPsw = await bcrypt.hash(password, 12);

        user = new User({
            email,
            password: hasdPsw,
        });

        await user.save();
        res.send('User enregistré !')
    }
    catch (err) {console.log(err)}
}

const login = async (req, res) => {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email });

        if (!user) {req.session.error = "Invalid Credentials";}

        const isMatch = await bcrypt.compare(password, user.password);

        if (!isMatch) {req.session.error = "Invalid Credentials";}

        req.session.isAuth = true;
        req.session.username = user.username;
        res.send('User co !')
    }
    catch (err) {console.log(err)}
}

const logout = async (req, res) => {
    req.session.destroy((err) => {
        if (err) throw err;
    });
}


module.exports = { register, login, logout };