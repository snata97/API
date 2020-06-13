var database = require('../db');
var db = database.connect();

exports.create = function (body) {
    let contact = body.contacts;
    let queries = [];
    let nameContact;
    for (let item in contact){
        values = [];
        for (let key in contact[item]) {
            nameContact = "'"+contact[item][key]+"'";
        }
        queries.push(`INSERT INTO contact (id, name) VALUES (default, ` + nameContact + `);`);
    }
    return db.multi(
        queries.join(";")
    );    
}

//ЗАПРОС НА СОЗДАНИЕ
// {
// 	"contacts":[
// 		{
// 			"name": "Мой Мир"
// 		},
// 		{
// 			"name": "Одноклассники"
// 		}
// 	]
// }

exports.update = function (body) {
    let contact = body.contacts;
    let queries = [];
    let idСontact;
    let nameСontact;
    for (let item in contact){
        for (let key in contact[item]) {
            if(key == "id"){
                idСontact = contact[item][key];
                continue;
            }
            nameСontact = key + " = '" + contact[item][key] + "'";
        }
        queries.push(`UPDATE job SET ` + nameСontact + ` WHERE id = `+ idСontact + `;`);
    }
    return db.multi(
        queries.join(";")
    );    
}

//ЗАПРОС НА ОБНОВЛЕНИЕ
// {
// 	"contacts":[
// 		{
// 			"id": 6,
// 			"name": "Одноклассники"
// 		},
// 		{
// 			"id": 7,
// 			"name": "Мой Мир"
// 		}
// 	]
// }

exports.delete = function (body) {
    let contact = body.contacts;
    let queries = [];
    let idСontact;
    for (let item in contact){
        for (let key in contact[item]) {
            idСontact = Number(contact[item][key]);
        }
        queries.push(`DELETE FROM contact WHERE id =`+ idСontact);
    }
    return db.multi(
        queries.join(";")
    );    
}

//УДАЛЕНИЕ
// {
// 	"contacts":[
// 		{
// 			"id": 6
// 		},
// 		{
// 			"id": 7
// 		}
// 	]
// }