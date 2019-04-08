let express = require('express')
let app = express()
let fs = require('fs')
let cwd = '../front'

app.get('/', function(req, res){
    fs.readFile(cwd + '/index.html', function(err, data){
        if(err) {console.log(err)}
        res.end(data)
    })
    // res.send("Test")
})

app.get('*', function(req, res){
    dir = req.url
    if(req.headers['accept'].search('text/html') >= 0){
        fs.readFile(cwd + req.url + '.html', function(err, data){
            if(err){
                fs.readFile(cwd + '/error.html', function(err,data){
                    res.end(data)
                })
            }else{
                res.end(data)
            }
        })
    }else{
        fs.readFile(cwd + req.url, function(err, data){
            if(err) console.log(err)
            res.end(data)
        })
    }
})


app.listen(8000, function(){
    console.log("Server started at http://localhost:8000/")
})