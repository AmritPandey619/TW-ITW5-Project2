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

app.listen(port, () => {
    console.log('Server is up on port 3000.')
})