let express = require('express')
let app = express()
let path = require('path')



app.use(express.static(path.join(__dirname, 'public')))
app.set('view engine', 'hbs')

app.get('/', (req, res) => {
    res.render('index')
})


app.listen(8000, function(){
    console.log("Server started at http://localhost:8000/")
})