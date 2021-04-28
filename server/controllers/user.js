import bcrypt from 'bcryptjs'
import jwt from 'jsonwebtoken'
import User from '../models/user.js'

export const login = async (req, res) => {
    // get data from front end (body)
    const {email, password} = req.body
    try {
        // get existing user by their email
        const existingUser = await User.findOne({ email })
        // if the user doesn't exist
        if(!existingUser) return res.status(404).json({message: 'User does not exist.'})
        // check if the password is valid
        const isPasswordValid = await bcrypt.compare(password, existingUser.password)
        // if the password is wrong
        if(!isPasswordValid) return res.status(400).json({message: 'Invalid credentials.'})
        // get jwt to be accessed by the front end
        // second arg is secret to be hidden in .env in prod
        const token = jwt.sign({email: existingUser.email, id: existingUser._id}, '47-47_XVFgoodMORNING!!!00000000000000120', {expiresIn: '1h'})
        // return the user
        res.status(200).json({result: existingUser, token})
    } catch (error) {
        res.status(500).json({message: 'Something went wrong'})
    }
}

export const signup = async (req, res) => {
    // get data from front end (body)
    const {email, password, confirmPassword, name} = req.body
    try {
        // check if user already exists
        const existingUser = await User.findOne({ email })
        // if the user already exists
        if(existingUser) return res.status(400).json({message: 'User already exists.'})
        // now check if passwords are the same
        if(password !== confirmPassword) return res.status(400).json({message: 'Passwords did not match.'})
        // if user doesn't exist and passwords match continue to create new user
        // hash the password
        const hashedPassword = await bcrypt.hash(password, 12)
        // create user now
        const result = await User.create({ email, password: hashedPassword, name})
        // create token
        const token = jwt.sign({email: result.email, id: result._id}, '47-47_XVFgoodMORNING!!!00000000000000120', {expiresIn: '1h'})
        // return the user
        res.status(200).json({result, token})
    } catch (error) {
        res.status(500).json({message: 'Something went wrong'})
    }
}