const path = require('path')
require('./db/mongoose') 
const express = require('express')
const hbs = require('hbs')
const User = require('./models/user')
const bodyParser = require('body-parser')
const client = require('./public/js/client')
const http = require('http')
const socketio = require('socket.io')

const app = express()
const port = process.env.PORT || 3000

app.use(bodyParser.urlencoded({extended:true}));
app.use(express.json())

// Define paths for Express config
const publicDirectoryPath = path.join(__dirname, '../assets')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

// Setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath) //register partials

// Setup static directory to serve
app.use(express.static(publicDirectoryPath))
app.use(express.static('public'));

app.get('', (req, res) => {
    res.render('index') 
})

app.get('/centre',(req,res)=>{
    res.render('centre')
})

app.get('/privacy',(req,res)=>{
    res.render('privacy')
})
app.get('/terms',(req,res)=>{
    res.render('terms')
})
app.get('/Courses',(req,res)=>{
    res.render('Courses')
})
app.get('/blogpage',(req,res)=>{
    res.render('blogpage')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.get('/signup', (req,res)=>{
    res.render('signup')
})



app.post('/signup', async (req,res)=>{ 
    console.log(req.body);
    const email = req.body.email
    let user=await User.findOne({email})
    if(user){
        res.render('signup',{
            text:'🚫Email is already registered.'
        })
    }
    user = new User(req.body) 
    try{
        await user.save() 
        const token =await user.generateAuthToken()
        res.status(201).render('index')
    }
    catch(e){
        res.status(401).send()
    }
})
var exhb = require('express-handlebars').create();
app.get('/login', async (req,res)=>{
    try{
        const user = await User.findByCredentials(req.body.email, req.body.password)
        const token = await user.generateAuthToken()
        res.render('index')
    }catch(e){
        res.status(404).send()
   
}})



app.listen(port, () => {
    console.log('Server is up on port 3000.')
})

