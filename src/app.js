const path = require('path')
const express = require('express')
const hbs = require('hbs')//alternative to ejs

const app = express()
const port = process.env.PORT || 3000//process.env.PORT is ther port heroku is listening to.

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
app.get('/courses',(req,res)=>{
    res.render('courses')
})
app.get('/blog',(req,res)=>{
    res.render('blog')
})
app.get('/about',(req,res)=>{
    res.render('about')
})
app.listen(port, () => {
    console.log('Server is up on port 3000.')
})