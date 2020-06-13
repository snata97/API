var database = require('../db');
var db = database.connect();

exports.findById = function (project_id, job_id) {
    return db.one('SELECT * FROM vacancy WHERE job_id = ${job_id} AND project_id = ${project_id}', {job_id: job_id, project_id: project_id});
}

exports.create = function (body) {
    let keys = [];
    let values = [];
    for (let key in body) {
        keys.push(key);
        values.push('${'+key+'}');
    }
    return db.none('INSERT INTO vacancy ('+ keys.join(',') +') VALUES(' + values.join(',') + ')', body);
}

exports.update = function (body) {
    let keysAndValues = [];
    for (let key in body) {
        if(key=="account_id" || key=="contact_id") continue;
        keysAndValues.push(key + " = ${" + key + '}');
    }
    return db.none('UPDATE vacancy SET '+ keysAndValues.join(',') + ' WHERE job_id = ${job_id} AND project_id = ${project_id}', body);
}

exports.delete = function (body) {
    return db.none('DELETE FROM vacancy WHERE job_id = ${job_id} AND project_id = ${project_id}', {job_id: body.job_id, project_id: body.project_id});    
}