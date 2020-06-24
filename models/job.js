var database = require('../db');
var db = database.connect();

exports.create = function (body) {
    let job = body.jobs;
    let queries = [];
    let nameJob;
    for (let item in job){
        for (let key in job[item]) {
            nameJob = "'"+job[item][key]+"'";
        }
        queries.push(`INSERT INTO job (id, name) VALUES (default, ` + nameJob + `);`);
    }
    return db.multi(
        queries.join(";")
    );    
}

exports.update = function (body) {
    let job = body.jobs;
    let queries = [];
    let idJob;
    let nameJob;
    for (let item in job){
        for (let key in job[item]) {
            if(key == "id"){
                idJob = job[item][key];
                continue;
            }
            nameJob = key + " = '" + job[item][key] + "'";
        }
        queries.push(`UPDATE job SET ` + nameJob + ` WHERE id = `+ idJob + `;`);
    }
    return db.multi(
        queries.join(";")
    );    
}

exports.delete = function (body) {
    let job = body.jobs;
    let queries = [];
    let idJob;
    for (let item in job){
        for (let key in job[item]) {
            idJob = Number(job[item][key]);
        }
        queries.push(`DELETE FROM job WHERE id =`+ idJob);
    }
    return db.multi(
        queries.join(";")
    );    
}
