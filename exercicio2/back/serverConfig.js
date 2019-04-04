let serv = require('http'), server;
let file = require('fs');
let cwd = '../front'
server = serv.createServer(function(req, res){
    let dir = req.url
    if(req.headers['accept'].search('text/html') >= 0){
        if(dir === '/'){
            file.readFile(cwd + '/index.html', function(err,data){
                res.write(data)
                res.end()
            })
        }else{
            file.readFile(cwd + dir, function(err, data){
                if(err){
                    file.readFile(cwd + '/error.html', function(err,data){
                        if(err){
                            res.write("Eu não faço a menor ideia do que acaba de acontecer")
                            res.end()
                        }
                        res.write(data)
                        res.end()
                    })
                }else{
                    res.write(data)
                    res.end()
                }
            })
        }
    }else{
        backCwd = './public/'
        file.readFile(backCwd + dir, function(err, data){
            if(err) console.log(err);
            res.write(data)
            res.end()
        })
    }
})

server.listen(8000);

