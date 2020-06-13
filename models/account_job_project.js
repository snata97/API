var database = require('../db');
var db = database.connect();

exports.findById = function (account_id, project_id, job_id) {
    return db.one('SELECT * FROM account_in_project WHERE project_id = ${project_id} AND account_id = ${account_id} AND job_id = ${job_id}', {project_id: project_id, account_id: account_id, job_id: job_id});
}

exports.create = function (body) {
    let keys = [];
    let values = [];
    for (let key in body) {
        keys.push(key);
        values.push('${'+key+'}');
    }
    return db.none('INSERT INTO account_in_project ('+ keys.join(',') +') VALUES(' + values.join(',') + ')', body);
}

exports.update = function (body) {
    let keysAndValues = [];
    for (let key in body) {
        if(key=="account_id" || key=="project_id" || key=="job_id") continue;
        keysAndValues.push(key + " = ${" + key + '}');
    }
    return db.none('UPDATE account_in_project SET '+ keysAndValues.join(',') + ' WHERE account_id = ${account_id} AND project_id = ${project_id} AND job_id = ${job_id}', body);
}

exports.delete= function (body) {
    return db.none('DELETE FROM account_in_project WHERE account_id = ${account_id} AND project_id = ${project_id} AND job_id = ${job_id}', {account_id: body.account_id, project_id: body.project_id, job_id: body.job_id});    
}