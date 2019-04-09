let express = require('express')
let app = express()
let path = require('path')
let db = require('./mongo')

app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    db.get((users) => {
        res.render('index',{users: users})
    })
    // res.render('index')
})

app.listen('8000', () =>{
    console.log("Server on")
});