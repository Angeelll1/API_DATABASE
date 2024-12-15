const db = require('../models/index');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const signInUser = async (req, res) => {
    try {
        const { username, password } = req.body;
        const user = await db.User.findOne({
            where: { username }
        });
        if (!user) {
            return res.status(404).json('Incorrect username or password');
        }


        // Verify user and password
        const passwordValid = await bcrypt.compare(password, user.password);
        if (!passwordValid) {
            return res.status(404).json('Incorrect username or password');
        }


        // Authenticate user with jwt
        const token = jwt.sign({ username: user.username }, process.env.JWT_SECRET, {
            expiresIn: process.env.JWT_REFRESH_EXPIRATION
        });

        res.status(200).send({
            user: {
                username: user.username,
                name: user.name,
                user_type: user.user_type,
            },
            token: token,
        });
    } catch (err) {
        console.log("sign in error = " + err)
        return res.status(500).send('Sign in error');
    }
}

const checkToken = async (req, res) => {
    try {
        const user = req.user; // Data user dari middleware (payload JWT)
        res.status(200).json({
            message: 'Token is valid',
            user: user, // Misalnya: { username: 'user123', iat: ..., exp: ... }
        });
    } catch (err) {
        console.log('Token validation error:', err);
        return res.status(500).json({ message: 'Token validation error' });
    }
};

// const getChiller = async (req, res) => {
//     try{
//         const {subdist_id} = req.body
//         // const chiller = await db.sequelize.query(`SELECT chiller_id, outlet_id, pic FROM public.m_chiller m WHERE m.subdist_id = '${subdist_id}'`)

//         const chiller = await db.Chiller.findAll({
//             where: { pic: subdist_id }
//         });

//         res.status(200).send({
//             data: chiller
//         });

//     }catch (err){
//         console.log('Error get chiller:', err);
//         return res.status(500).json({ message: err });
//     }
// }

module.exports = { signInUser, checkToken };

