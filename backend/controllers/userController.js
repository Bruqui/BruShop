import userModel from "../models/userModel.js"
import bcrypt from "bcrypt"
import validator from "validator"
import jwt from "jsonwebtoken"

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

// CONTROLLER FUNCTION FOR USER LOGIN
const loginUser = async (req, res) => {
    res.json({ message: "this is login controller function for login api" })
}

// CONTROLLER FUNCTION FOR USER REGISTER
const registerUser = async (req, res) => {
    try {
        const { name, email, password } = req.body
        // CHECKING IF USER ALREADY EXISTS
        const exists = await userModel.findOne({ email })
        if (exists) {
            return res.json({ success: false, message: "User already exists" })
        }
        // VALIDATE PASSWORD AND CHECKING PASSWORD STRENGTH
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Please enter a valid email" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter a strong password" })
        }

        // HASHING USER PASSWORD
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)

        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })

        const user = await newUser.save()

        const token = createToken(user._id)

        res.json({ success: true, token })

    } catch (error) {
        console.log(error)
        res.json({ success: false, message: error.message })
    }
}

// CONTROLLER FUNCTION FOR ADMIN LOGIN
const adminLogin = async (req, res) => { }

export { loginUser, registerUser, adminLogin }