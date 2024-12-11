const express=require('express')
const cookieParser=require('cookie-parser')
const path=require('path')
const db=require('./config/mongoose-connection')
const indexRouter=require('./routes/index')
const usersRouter=require('./routes/usersRouter')
const ownersRouter=require('./routes/ownersRouter')
const productsRouter=require('./routes/productsRouter')
const expressSession=require('express-session')
const flash=require('connect-flash')

require('dotenv').config()

const app=express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(cookieParser())
app.use(
    expressSession({
        resave: false,
        saveUninitialized: false,
        secret: process.env.EXPRESS_SESSION_SECRET,
    })
)
app.use(flash())
app.use(express.static(path.join(__dirname, "public")))
app.set('view engine', 'ejs')
// app.set('views', './views');

app.use('/', indexRouter)
app.use('/users', usersRouter)
app.use('/owners', ownersRouter)
app.use('/products', productsRouter)

app.get('/', function (req, res){
    res.send("ok")
})

app.listen(3000)