import collection from '../back/mongo'

collection.add('TCC', 3)
collection.add('Data', 2)
collection.remove('TCC', 3)

console.log('Finished')


// for (ea in atividades){
//     let feed = document.getElementById('feed_me');
//     let size = 20 - atividades[ea]['activity'].length
     
//     let inner = "<h4>Atividade   "+ atividades[ea]['activity']+ " ".repeat(size) + "Nível: "+ atividades[ea]['grade'] +"</h4>"
//     feed.innerHTML += inner
// }