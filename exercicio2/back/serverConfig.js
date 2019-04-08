let express = require('express')
let app = express()
let fs = require('fs')

app.get('/', function(req, res){
    fs.readFile('../front/index.html', function(err, data){
        if(err) {console.log(err)}
        res.end(data)
    })
    // res.send("Test")
})

app.get('*', function(req, res){
    dir = req.url
    if(req.headers['accept'].search('text/html') >= 0){
        fs.readFile('../front/pages' + req.url + '.html', function(err, data){
            if(err){
                fs.readFile('../front/pages/error.html', function(err,data){
                    res.end(data)
                })
            }else{
                res.end(data)
            }
        })
    }else{
        fs.readFile('../front/src' + req.url, function(err, data){
            if(err) console.log(err)
            res.end(data)
        })
    }
})


app.listen(8000, function(){
    console.log("Server started at http://localhost:8000/")
})