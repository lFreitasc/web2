let client = require('mongodb').MongoClient

module.exports = function(callback){
    client.connect('mongodb://localhost:27017/atividades',
                        {useNewUrlParser: true},
                        function(err, client){
                            if(err) throw err;
                            let db = client.db('atividades')
                            callback(db)
                        })
}

function add(db, name, grade){
    db.collection('activities').insertOne(
        {
            'activity':name,
            'grade': grade
        }, function(err, msg){
            if(err) throw err;
            console.log(msg)
        }
    )
}

function remove(db, name, grade){
    db.collection('activities').remove(
        {
            'activity': {name},
            'grade' : {grade}
        }, true
    )
}

function getList(db){
    return  db.collection('activities').find()
    
}
