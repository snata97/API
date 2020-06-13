var database = require('../db');
var db = database.connect();

exports.create = function (body) {
    let competence = body.competences;
    let queries = [];
    let nameCompetence;
    for (let item in competence){
        values = [];
        for (let key in competence[item]) {
            nameCompetence = "'"+competence[item][key]+"'";
        }
        queries.push(`INSERT INTO competence (id, name) VALUES (default, ` + nameCompetence + `);`);
    }
    return db.multi(
        queries.join(";")
    );    
}

//ЗАПРОС НА СОЗДАНИЕ
// {
// 	"competences":[
// 		{
// 			"name": "Разработчик С++"
// 		},
// 		{
// 			"name": "Разработчик Python"
// 		}
// 	]
// }

exports.update = function (body) {
    let competence = body.competences;
    let queries = [];
    let idCompetence;
    let nameCompetence;
    for (let item in competence){
        for (let key in competence[item]) {
            if(key == "id"){
                idCompetence = competence[item][key];
                continue;
            }
            nameCompetence = key + " = '" + competence[item][key] + "'";
        }
        queries.push(`UPDATE job SET ` + nameCompetence + ` WHERE id = `+ idCompetence + `;`);
    }
    return db.multi(
        queries.join(";")
    );    
}

//ЗАПРОС НА ОБНОВЛЕНИЕ
// {
// 	"competences":[
// 		{
// 			"id": 6,
// 			"name": "Разработчик С++"
// 		},
// 		{
// 			"id": 7,
// 			"name": "Разработчик Python"
// 		}
// 	]
// }

exports.delete = function (body) {
    let competence = body.competences;
    let queries = [];
    let idCompetence;
    for (let item in competence){
        for (let key in competence[item]) {
            idCompetence = Number(competence[item][key]);
        }
        queries.push(`DELETE FROM competence WHERE id =`+ idCompetence);
    }
    return db.multi(
        queries.join(";")
    );    
}

//УДАЛЕНИЕ
// {
// 	"competences":[
// 		{
// 			"id": 6
// 		},
// 		{
// 			"id": 7
// 		}
// 	]
// }