let express = require('express')
let app = express()
let path = require('path')
let bodyParser = require('body-parser')
let db = require('./mongo')

app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'hbs')

app.use(bodyParser.urlencoded({extended: true}))

app.get('/', (req, res) => {
    db.read((atividades) => {
        res.render('index', {atividades: atividades})
    })
})

app.post('/create', (req, res) => {
    db.create(req.body.activity, req.body.grade)
    res.redirect('/')
})


app.listen(8000, function(){
    console.log("Server started at http://localhost:8000/")
})