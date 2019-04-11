
let client = require('mongodb').MongoClient

module.exports = class DAO{   
    static connect(callback){
        mongo.connect('mongodb://localhost:27017',
        {userNewParser: true},
        (err, conn)=>{
            if(err){throw err}
            else{
                let db = conn.db('atividades')
                callback(db)
            }
        })
    }

    static get(callback){
        DAO.connect((db)=>{
            db.collection('activities').find().toArray((err, activies) => {
                if(err){throw err}
                else{
                    callback(activies)
                }
            })
        })
    }

    static add(activie, grade){
        DAO.connect((db) => {
            db.collection('activities').insertOne({
                'activity': activie,
                'grade' : grade
            })
        })
    }

    static remove(activie, grade){
        DAO.connect((db) => {
            db.collection('activities').deleteOne({
                'activity': activie,
                'grade': grade
            })
        })
    }

    static update(activie, grade){
        DAO.connect((db) => {
            db.collection('activities').update({
                'activity': activie
            },{
                'activity': activie,
                'grade': grade
            },{
                upsert: true
            })
        })
    }
}
