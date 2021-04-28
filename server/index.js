// import path from 'path'
import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors'
import dotenv from 'dotenv'

// import routes
import postRoutes from './routes/posts.js'
import usersRoutes from './routes/users.js'


// Initialize express
const app = express()
dotenv.config()

app.use(bodyParser.json({ extended: true }))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(cors())

// tell app to use the routes
app.use('/posts', postRoutes)
app.use('/users', usersRoutes)

// // get react front end build
// app.use(express(express.static(path.join(__dirname, "..", "build"))))
// app.use(express.static("public"))

// mongodb atlas connection url
const URI = process.env.CONNECTION_URI

// create port
const PORT = process.env.PORT || 5000

// send any routing requirements to front end react
// app.use((res, req, next) => {
//     res.sendFile(path.join(__dirname, "...", "build", "index.html"))
// })

// connect to the database
mongoose.connect(URI, { useNewUrlParser: true, useFindAndModify: false, useUnifiedTopology: true })
.then(() => app.listen(PORT, () => console.log(`Server runnung on port ${PORT}`)))
.catch((error) => console.log(error.message))