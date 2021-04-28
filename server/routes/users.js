import express from 'express'
const router = express.Router()
// import controller functions
import { login, signup } from '../controllers/user.js'

router.post('/login', login)
router.post('/signup', signup)

export default router
