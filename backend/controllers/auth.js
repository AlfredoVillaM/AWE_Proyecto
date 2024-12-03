const { response, request } = require('express');
const { UserRepository } = require('../repositories/user');
const bcrypt = require("bcrypt");
const { generateJWT } = require('../helpers/jwt');

const login = async (req = request, res = response) => {
    const { username, password } = req.body;

    const user = await UserRepository.getOne({ username: username });
    if (!user) {
        return res.status(401).json({
            msg: "Usuario y/o contraseña inválidos."
        });
    }

    const validPasssword = await bcrypt.compare(password, user.password);
    if (!validPasssword) {
        return res.status(401).json({
            msg: "Usuario y/o contraseña inválidos."
        });
    }

    try {
        const token = await generateJWT(username);
        res.status(200).json({
            msg: "Login OK",
            username: user.username,
            role: user.role,
            token: token
        })
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Internal error"
        })
    }
}

const register = async (req = request, res = response) => {
    const { username, password } = req.body;
    const saltRounds = process.env.SALTS_ROUND || 10;

    try {
        const user = await UserRepository.getOne({ username: username });
        if (user) {
            return res.status(400).json({
                msg: "Usuario ya existente"
            });
        }

        const hashedPassword = await bcrypt.hash(password, Number(saltRounds));
        const newUser = await UserRepository.create({
            username: username,
            password: hashedPassword,
            role: "user" 
        })

        const { password: _, ...simpleUser } = newUser.toObject();

        res.status(201).json({
            msg: "Usuario creado",
            user: simpleUser
        }); 
    } catch (error) {
        console.log(error);
        res.status(500).json({
            msg: "Internal error"
        })
    }
}

module.exports = {
    login,
    register
}