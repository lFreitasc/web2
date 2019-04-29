let mongo = require('mongodb').MongoClient

module.exports = class ActivitieDAO{
    static connect(callback){
        mongo.connect('mongodb://localhost:27017',
        {
            useNewUrlParser: true
        }, (err, conn) => {
            if(err) {throw err}
            else{
                let db = conn.db('atividades')
                callback(db)
            }
        })
    }

    static read(callback){
        ActivitieDAO.connect((db) => {
            db.collection('activities').find().toArray((err, atividades) => {
                if(err) {throw err}
                else{
                    callback(atividades)
                }
            })
        })
    }

    static create(activitity, grade){
        ActivitieDAO.connect((db) => {
            db.collection('activities').insertOne({
                'activity': activitity,
                'grade': grade
            })
        })
    }
}