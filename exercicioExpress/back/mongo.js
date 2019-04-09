let mongo = require('mongodb').MongoClient

module.exports = class UserDAO{
    static connect(callback){
        mongo.connect('mongodb://localhost:27017',
        {
            useNewUrlParser: true
        }, (err, conn) =>{
            if(err) {throw err}
            else{
                let db = conn.db('usuarios')
                callback(db)
            }
        });
    }

    static get(callback){
        UserDAO.connect((db) => {
            db.collection('collection').find().toArray((err, users) =>{
                if(err){throw err;}
                else{
                    callback(users)
                }
            })
        })
    }
}