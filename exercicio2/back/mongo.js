let client = require('mongodb').MongoClient

client.connect('mongodb://localhost:27017/atividades',
                    {useNewUrlParser: true},
                    function(err, client){
                        if(err) throw err;
                        var db = client.db('atividades')

                    })

function add(name, grade){
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

function remove(name, grade){
    db.collection('activities').remove(
        {
            'activity': {name},
            'grade' : {grade}
        }, true
    )
}
