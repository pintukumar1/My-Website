const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const passport = require('passport')
const cors = require('cors')
const path = require('path')

const users = require('./routes/api/users')
const profile = require('./routes/api/profile')
const posts = require('./routes/api/posts')

const app = express()

//DB config
app.use(cors());

const db = require('./config/keys').mongoURI ;

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())
// connect to mongoDB
mongoose.connect(db)
.then(() => console.log('mongoDB connected'))
.catch(err => console.log(err))

app.use(passport.initialize())

//passport config ....
require('./config/passport')(passport);
//use routes
app.use('/api/users', users)
app.use('/api/profile', profile)
app.use('/api/posts', posts)

if(process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
}

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'))
})

const port = process.env.PORT || 5000

app.listen(port, () => {
    console.log(`Server running on port ${port} `)
})