var database = require('../db');
var db = database.connect();

exports.update = function (body,projectid) {
    let vacancies = body.vacancies;
    let queries = [];
    let values = [];
    let keys = [];
    let keysValyes = [];
    for (let item in vacancies){
        values = [];
        keys = [];
        keysValyes = [];
        vacancyid = false;
        for (let key in vacancies[item]) {
            if (typeof vacancies[item][key] === 'string') {
                values.push("'"+vacancies[item][key]+"'");
                keys.push(key);
                keysValyes.push(key + " = '" + vacancies[item][key] + "'");
                continue;
            }
            if(key == "id") {
                vacancyid = vacancies[item][key];
                continue;
            }
            values.push(vacancies[item][key]);
            keys.push(key);
            keysValyes.push(key + "=" + vacancies[item][key]);
        }
        if(vacancyid){
            queries.push(`UPDATE vacancy SET ` + keysValyes.join(",")+` WHERE projectid = ` + projectid + ` AND id = ` + vacancyid);
            continue;
        }
        keys.push("projectid");
        values.push(projectid);
        queries.push(`INSERT INTO vacancy (id, ` + keys.join(',') + `) VALUES (default, ` + values.join(',') + `)`);
    }
    return db.multi(
        queries.join(";")
    );    
}

exports.delete = function (body) {
    let events = body.vacancies;
    let queries = [];
    for (let item in events){
        for (let key in events[item]) {
            id = events[item][key];
        }
        queries.push(`DELETE FROM vacancy WHERE id =`+ id);
    }
    return db.multi(
        queries.join(";")
    );
}